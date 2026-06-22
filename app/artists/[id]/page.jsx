// import { supabase } from "@supabase/supabase";
import artistModel from "@/libs/models/artists";
import Image from 'next/image';
import {notFound, redirect } from 'next/navigation';

export default async function Artist({ params }) {
  const { id } = await params;
  const { data: artist, error } = await artistModel.getId(id);
  if(!artist || error) {
      console.error(error);
      console.log(artist);
      notFound()
  }
  return (
    <div className="m-3 py-4">
      <img className="w-48" src={artist.image} alt={artist.name} />
      <h2 className="text-3xl font-bold ">{artist.name}</h2>
    </div>
  );
}
