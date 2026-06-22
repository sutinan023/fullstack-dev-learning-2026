// import supabase from "@/libs/supabase";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import Link from "next/link";
import songModel from "@/libs/models/song";
import {notFound, redirect } from 'next/navigation';


export default async function Songs() {
  let songs = [];

   const { data, error } = await songModel.getAll();
    if(!data || error) {
      console.error(error);
      console.log(data);
      notFound()
  }
  songs = [...data];

  return (
    <div>
      <h1 className="text-3xl font-bold m-3 text-center">Songs</h1>
      <div className="grid grid-cols-3">
        {
        songs.map(song => (
          <Card Key={song.id} imgUrl={song.cover_image} title={song.title}>
            <div className="card-button  flex justify-end">
              <Link href={`/songs/${song.id}`}>
              <Button title="Listen" />
              </Link>
            </div>
          </Card>
        ))
        }
      </div>
    </div>
  );
}
