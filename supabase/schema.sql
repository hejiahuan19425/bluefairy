create extension if not exists pgcrypto;

create table if not exists tombs (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('dialogue', 'monologue')),
  epitaph text not null check (char_length(epitaph) <= 60),
  excerpt jsonb not null,
  full_text text,
  happened_at text not null,
  public_key text not null,
  status text not null default 'active' check (status in ('active', 'buried', 'removed')),
  world_x real not null,
  world_z real not null,
  visit_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists stones (
  id bigint generated always as identity primary key,
  tomb_id uuid not null references tombs(id) on delete cascade,
  visitor text not null,
  created_at timestamptz not null default now(),
  unique (tomb_id, visitor)
);

create table if not exists reports (
  id bigint generated always as identity primary key,
  tomb_id uuid not null references tombs(id) on delete cascade,
  visitor text not null,
  created_at timestamptz not null default now(),
  unique (tomb_id, visitor)
);

create index if not exists tombs_active_created_at_idx
  on tombs (created_at desc)
  where status = 'active';

create index if not exists tombs_world_idx
  on tombs (world_x, world_z)
  where status = 'active';

create index if not exists stones_tomb_id_idx on stones (tomb_id);
create index if not exists reports_tomb_id_idx on reports (tomb_id);

alter table tombs enable row level security;
alter table stones enable row level security;
alter table reports enable row level security;

-- No public policies yet. M2 server routes use the service role key only.
