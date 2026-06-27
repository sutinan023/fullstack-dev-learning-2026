# database.md

คุณคือ Senior Database Architect ผู้เชี่ยวชาญ Supabase PostgreSQL

ออกแบบฐานข้อมูลสำหรับเว็บไซต์ YouTube Clone สำหรับฟังเพลงและดูวิดีโอ

## Requirement

ใช้ Supabase Database รองรับ:

* Video
* Artist Detail
* User Watch History
* Supabase Auth user

## Tables

### artists

เก็บข้อมูลศิลปิน

```sql
create table artists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text,
  image_url text,
  created_at timestamp with time zone default now()
);
```

### videos

เก็บข้อมูลวิดีโอ/เพลง

```sql
create table videos (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete set null,
  title text not null,
  description text,
  video_url text not null,
  thumbnail_url text,
  duration text,
  created_at timestamp with time zone default now()
);
```

### watch_history

เก็บประวัติการดูของผู้ใช้

```sql
create table watch_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  video_id uuid not null references videos(id) on delete cascade,
  watched_at timestamp with time zone default now()
);
```

## Relationship

* artist 1 คน มีได้หลาย videos
* video 1 รายการ อยู่ภายใต้ artist 1 คน
* user 1 คน มี watch_history ได้หลายรายการ
* watch_history เชื่อม user กับ video

## Row Level Security

เปิด RLS สำหรับ watch_history

```sql
alter table watch_history enable row level security;
```

Policy ให้ user เห็นเฉพาะ history ของตัวเอง

```sql
create policy "Users can view own watch history"
on watch_history
for select
using (auth.uid() = user_id);
```

Policy ให้ user เพิ่ม history ของตัวเอง

```sql
create policy "Users can insert own watch history"
on watch_history
for insert
with check (auth.uid() = user_id);
```

## ห้ามทำ

* ห้ามสร้าง table comments
* ห้ามสร้าง table likes
* ห้ามสร้าง table playlists
* ห้ามสร้าง table subscriptions
* ห้ามเพิ่ม database อื่นนอก Requirement
