import React from "react";
import Carousel from "../components/Carousel";
import ChannelItem from "../components/ChannelItem";
import ChannelPages from "../layouts/ChannelPAges";
import CurrentChannel from "../components/CurrentChannel";
import ArtProjects from "../components/ArtProjects";
import { Slides } from "../DUMMY_DATA";

export default function Home() {

  return (
    <section className="overflow-hidden p-2">
      <Carousel text="image" />
      <ChannelItem />
      <CurrentChannel title="The Art of Immortals of Avenum" />
      <ChannelPages>
        {Slides.map((art, index) => (
          <ArtProjects
          key={art.index}
            id={art.id}
            image={art.image}
            channel={art.channel}
            profile={art.profile}
            title={art.title}
          />
        ))}
      </ChannelPages>
    </section>
  );
}
