
import GallerySorting from "../components/GallerySorting";

export default function ChannelPages({ children }) {
  return (
    <>
      <section
        className="relative grid 
      grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 grid-rows-1 w-100"
      >
        {children}
      </section>
      <GallerySorting />
    </>
  );
}
