// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Slides } from "../DUMMY_DATA";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Controller, Keyboard } from "swiper/modules";

export default function Carausel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 5,

            slidesPerGroup: 5,
          },
          1200: {
            slidesPerView: 7,

            slidesPerGroup: 7,
          },
          1400: {
            slidesPerView: 8,

            slidesPerGroup: 8,
          },
        }}
        spaceBetween={10}
        grabCursor={true}
        pagination={true}
        modules={[Keyboard, Controller]}
        className="w-100 h-100 flex gap-1"
      >
        {Slides.map((button) => (
          <SwiperSlide
            id={button.id}
            key={button.key}
            className="p-1 rounded-md transition duration-700 hover:bg-zinc-600  "
          >
            <div className="flex items-center justify-left gap-2 text-center">
              <div className="w-12 h-11 rounded-lg overflow-hidden">
                <img
                  src={button.image}
                  alt=""
                  className="w-100 h-100 object-cover"
                />
              </div>
              <span>{button.channel}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
