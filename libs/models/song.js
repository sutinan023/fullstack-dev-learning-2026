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
  getAll: async () => {
    return await supabase
            .from("songs")
            .select("*");
  }
}
 export default songModel