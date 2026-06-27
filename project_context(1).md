# Project Context

## Project

MusicTube (YouTube Clone)

## Stack

-   React + Vite
-   Supabase Database
-   Supabase Auth
-   GitHub OAuth
-   Vercel

## Scope

-   Home
-   Watch Video
-   Artist Detail
-   Login
-   GitHub OAuth
-   Watch History

## Database

artists(id,name,genre,image)
albums(id,artist_id,title,release_year,cover_image)
songs(id,album_id,track_number,title,duration_seconds,cover_image,youtube_url)
watch_history(id,user_id,song_id,watched_at)

Rule: songs -\> albums -\> artists Do NOT use songs.artist_id.
