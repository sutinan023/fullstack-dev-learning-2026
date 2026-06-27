import supabase from "../supabase";

const watchHistoryModel = {
  create: async ({ user_id, song_id }) => {
    return await supabase
            .from("watch_history")
            .insert({ user_id, song_id });
  },
  getByUser: async (userId) => {
    return await supabase
            .from("watch_history")
            .select("id, watched_at, songs(id, title, duration_seconds, cover_image, youtube_url, albums(id, title, artists(id, name, image)))")
            .eq("user_id", userId)
            .order("watched_at", { ascending: false });
  }
}

export default watchHistoryModel
