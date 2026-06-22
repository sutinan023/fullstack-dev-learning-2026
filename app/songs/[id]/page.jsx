// import { supabase } from "@supabase/supabase";
import songModel from "@/libs/models/song";
import {notFound, redirect } from 'next/navigation';


export default async function Songs({ params }) {
  const { id } = await params;
  const { data: song, error } = await songModel.getId(id);

  if(!song || error) {
      console.error(error);
      console.log(song);
      notFound()
  }
  const videoId = song.youtube_url.split("=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title={song.title}
        frameborder="0"
        allowFullScreen
      />
      <h2 className="text-2xl text-bold">{song.title}</h2>
    </div>
  );
}
