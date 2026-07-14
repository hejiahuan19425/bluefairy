export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type TombKind = "dialogue" | "monologue";
export type TombStatus = "active" | "buried" | "removed";

export type ExcerptLine = {
  role: string;
  text: string;
};

export type Database = {
  public: {
    Tables: {
      tombs: {
        Row: {
          id: string;
          kind: TombKind;
          epitaph: string;
          excerpt: Json;
          full_text: string | null;
          happened_at: string;
          public_key: string;
          status: TombStatus;
          world_x: number;
          world_z: number;
          visit_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          kind: TombKind;
          epitaph: string;
          excerpt: Json;
          full_text?: string | null;
          happened_at: string;
          public_key: string;
          status?: TombStatus;
          world_x: number;
          world_z: number;
          visit_count?: number;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["tombs"]["Insert"]>;
      };
      stones: {
        Row: {
          id: number;
          tomb_id: string;
          visitor: string;
          created_at: string;
        };
        Insert: {
          tomb_id: string;
          visitor: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["stones"]["Insert"]>;
      };
      reports: {
        Row: {
          id: number;
          tomb_id: string;
          visitor: string;
          created_at: string;
        };
        Insert: {
          tomb_id: string;
          visitor: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["reports"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
