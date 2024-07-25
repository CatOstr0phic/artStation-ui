import ProfileSection from "./sections/ProfileSection";
import Card from "../layouts/Card";
import UploadBg from "../components/UploadBg";
import AboutArt from "../components/AboutArt";
import SoftwareUsed from "../components/SoftwareUsed";

export default function Profile() {
  const text = `
  Description of the image Lorem ipsum, dolor sit amet consectetur
  adipisicing elit. Sit, aliquid fugit? Accusantium dolor nulla libero
  veritatis aliquam eius autem atque quibusdam reiciendis. Fuga, officia
  voluptatibus. Corrupti enim laboriosam blanditiis dolorem.`;

  return (
    <section className="grid grid-cols-7 grid-rows-5 gap-4 h-[88vh] overflow-hidden">
      <div className="col-span-5 row-span-5">
        {/* <div
          className="w-100 h-full bg-black
          rounded-lg overflow-hidden overflow-y-scroll"
        ></div> */}

        <UploadBg />
      </div>
      <Card css="col-span-2 row-span-5 col-start-6">
        <ProfileSection
          city={"Ashgabat"}
          country={"Trukmenistan"}
          profileId={"QiU847h28D"}
          accauntName={"Lamalama dev"}
        />
        <AboutArt text={text} />
        <p className="text-md text-neutral-400">Tools that I use:</p>
        <SoftwareUsed />
      </Card>
    </section>
  );
}
