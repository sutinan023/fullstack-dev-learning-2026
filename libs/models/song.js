import supabase from "../supabase";

const songModel = {
  getId: async (id) => {
    return await supabase
            .from("songs")
            .select()
            .eq("id", id)
            .limit(1)
            .single()
  },
  getDetail: async (id) => {
    return await supabase
            .from("songs")
            .select("*, albums(id, title, release_year, cover_image, artists(id, name, genre, image))")
            .eq("id", id)
            .limit(1)
            .single()
  },    
  getAll: async () => {
    return await supabase
            .from("songs")
            .select("*, albums(id, title, release_year, cover_image, artists(id, name, genre, image))")
            .order("id", { ascending: false });
  }
}
 export default songModel
