# Database Schema

## Tables

### artists

-   id (int)
-   name
-   genre
-   image

### albums

-   id
-   artist_id -\> artists.id
-   title
-   release_year
-   cover_image

### songs

-   id
-   album_id -\> albums.id
-   track_number
-   title
-   duration_seconds
-   cover_image
-   youtube_url

### watch_history

-   id
-   user_id -\> auth.users.id
-   song_id -\> songs.id
-   watched_at

## Relationship

artists └── albums └── songs └── watch_history
