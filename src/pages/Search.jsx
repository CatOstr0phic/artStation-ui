import React from "react";
import SearchSection from "./sections/SearchSection";
import { useStateValue } from "../redux/StateProvider";
import ChannelPages from "../layouts/ChannelPAges";
import ArtProjects from "../components/ArtProjects";

export default function Search() {
  const [{ search, text, searchText }, dispatch] = useStateValue();
  console.log("this is the basket, ", search);
  console.log(text);

  const handleOnChange = (e) => {
    dispatch({
      type: "UPDATE",
      item: e.target.value,
    });
    console.log(search);
  };

  const handleSearch = (e) => {
    dispatch({
      type: "SEARCH",
      item: text,
    });
    console.log(search);
  };

  return (
    <section>
      <SearchSection
        value={text}
        handleOnChange={handleOnChange}
        handleSearch={handleSearch}
      />
      <div className="mt-6">
        <ChannelPages>
          {search
            .filter((filter) => {
              return text === ""
                ? ""
                : filter.title.toLowerCase().includes(text);
            })
            .map((filter) => (
              <ArtProjects
                id={filter.id}
                key={filter.id}
                title={filter.title}
                profile={filter.profile}
                image={filter.image}
                category={filter.category}
                channel={filter.channel}
              />
            ))}
        </ChannelPages>
      </div>
    </section>
  );
}
