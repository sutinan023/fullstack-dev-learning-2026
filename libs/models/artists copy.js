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
    getAll: async () => {
    return await supabase
            .from("artists")
            .select("*");
  }
}
 export default artistModel

