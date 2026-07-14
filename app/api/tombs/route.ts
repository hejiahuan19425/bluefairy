import { NextResponse } from "next/server";
import { getSupabaseAdmin, hasSupabaseConfig } from "../../../lib/supabase/server";
import type { ExcerptLine, TombKind } from "../../../lib/supabase/types";

export const dynamic = "force-dynamic";

type TombRow = {
  id: string;
  kind: TombKind;
  epitaph: string;
  excerpt: unknown;
  full_text: string | null;
  happened_at: string;
  public_key: string;
  world_x: number;
  world_z: number;
  visit_count: number;
  created_at: string;
};

function normalizeExcerpt(value: unknown): ExcerptLine[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((line) => {
      if (!line || typeof line !== "object") return null;
      const record = line as Record<string, unknown>;
      if (typeof record.text !== "string") return null;
      return {
        role: typeof record.role === "string" ? record.role : "voice",
        text: record.text,
      };
    })
    .filter((line): line is ExcerptLine => Boolean(line));
}

export async function GET() {
  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { tombs: [], error: "Supabase is not configured on this environment" },
      { status: 503 },
    );
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("tombs")
    .select("id, kind, epitaph, excerpt, full_text, happened_at, public_key, world_x, world_z, visit_count, created_at")
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(120);

  if (error) {
    return NextResponse.json({ tombs: [], error: error.message }, { status: 500 });
  }

  const tombs = (data ?? []) as TombRow[];

  return NextResponse.json({
    tombs: tombs.map((tomb) => ({
      id: tomb.id,
      kind: tomb.kind,
      epitaph: tomb.epitaph,
      excerpt: normalizeExcerpt(tomb.excerpt),
      fullText: tomb.full_text,
      happenedAt: tomb.happened_at,
      publicKey: tomb.public_key,
      world: { x: tomb.world_x, z: tomb.world_z },
      visitCount: tomb.visit_count,
      createdAt: tomb.created_at,
    })),
  });
}
