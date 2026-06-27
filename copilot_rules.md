# Codex / Cursor Rules

Always read: 1. project_context.md 2. database_schema.md

Database is source of truth.

Never: - Drop tables - Rename columns - Change PK type - Create videos
table - Use songs.artist_id

Always: songs -\> albums -\> artists

Use: songs.youtube_url songs.cover_image songs.duration_seconds

Watch history: watch_history.song_id

If code conflicts with DB: Fix code, not database.
