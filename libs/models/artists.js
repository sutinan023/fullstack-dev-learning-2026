import supabase from "../supabase";

const artistModel = {
  getId: async (id) => {
    return await supabase
            .from("artists")
            .select()
            .eq("id", id)
            .limit(1)
            .single();
  },
  getDetail: async (id) => {
    return await supabase
            .from("artists")
            .select("*, albums(id, title, release_year, cover_image, songs(id, track_number, title, duration_seconds, cover_image, youtube_url))")
            .eq("id", id)
            .limit(1)
            .single();
  },
    getAll: async () => {
    return await supabase
            .from("artists")
            .select("*");
  },
  create: async (artist) => {
    return await supabase
            .from("artists")
            .insert(artist)
            .select()
            .single();
  }
}
 export default artistModel

