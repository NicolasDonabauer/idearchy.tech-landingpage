/**
 * Supabase browser client — use this in Client Components ('use client').
 *
 * SQL to run in Supabase SQL editor before use:
 *
 *   create table if not exists public.waitlist (
 *     id uuid default gen_random_uuid() primary key,
 *     name text not null,
 *     email text not null unique,
 *     created_at timestamptz default now() not null
 *   );
 *   alter table public.waitlist enable row level security;
 *   create policy "Allow public inserts"
 *     on public.waitlist for insert to anon with check (true);
 */

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
