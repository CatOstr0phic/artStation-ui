/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../layouts/Card";
import { useStateValue } from "../redux/StateProvider";
import SavesImg from "../components/SavesImg";

export default function Saved() {
  const [{ liked }, dispatch] = useStateValue();

  return (
    <Card>
      <section
        className={`relative ${!liked.length > 0 ? "" : "grid"} 
      gap-1
      grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      grid-rows-1 w-100`}
      >
      {liked.length > 0 ? (
        liked.map((item) => (
          <SavesImg
            id={item.id}
            imageName={item.imageName}
            imageUrl={item.imageUrl}
          />
        ))
      ) : (
        <div className="p-10 text-center text-2xl font-semibold text-zinc-700">
          You have no favourite projects!
        </div>
      )}
      </section>
    </Card>
  );
}
