import { Link } from "react-router-dom";

export default function ArtProjects({ id, key, title, image, channel, profile }) {

  return (
    <Link to="/image-page">
      <div
        key={key}
        id={id}
        className="h-56 relative basis-[350px] 
          sm:basis-80 rounded-[3px] m-1 overflow-hidden
          [&>div]:hidden [&>div]:hover:block "
      >
        <img src={image} alt="#" className="w-100 h-100 object-cover" />
        <div
          className="absolute h-100 w-full 
         z-1 bottom-0 left-0 right-0 w-100"
        >
          <div
            className="text-white h-100 p-3 
              items-end flex gap-2 w-full
              bg-gradient-to-t from-[#0000009a]
               via-none to-none backdrop-opacity-3"
          >
            <div
              className="h-10 w-10 
            rounded-full overflow-hidden"
            >
              <img
                src={profile}
                className="w-100 h-100 object-cover"
                alt={title}
              />
            </div>
            <div className="w-full">
              <h2
                className="text-lg font-semibold 
                tracking-tight text-zinc-300"
              >
                {title}
              </h2>
              <p
                className="text-sm font-medium 
              text-zinc-300"
              >
                {channel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
