// import React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function Carousel({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState("left");

//   const handleNext = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setDirection("left");
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const slideVariants = {
//     hiddenRight: {
//       x: "100%",
//       opacity: 0,
//     },
//     hiddenLeft: {
//       x: "-100%",
//       opacity: 0,
//     },
//     visible: {
//       x: "0",
//       opacity: 1,
//       transition: {
//         duration: 1,
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const slidersVariants = {
//     hover: {
//       scale: 1.2,
//       backgroundColor: "#ff00008e",
//     },
//   };
//   //   1715

//   return (
//     <div className="flex justify-center relative rounded-lg h-[300px] w-100 m-[auto]">
//       <AnimatePresence>

//           <motion.img
//             key={currentIndex}
//             variants={slideVariants}
//             initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
//             animate="visible"
//             exit="exit"
//             src={images[currentIndex]}
//             alt="#"
//             className="w-[99%] max-h-[220px] max-w-[300px] h-[99%] rounded-md border-2"
//           />
//       </AnimatePresence>
//       <div className="flex justify-between">
//         <motion.div
//           variants={slidersVariants}
//           whileHover="hover"
//           className="left-0 bg-slate-800 text-white p-3 mx-[20px] rounded-[50%] absolute top-0 bottom-0 my-auto h-[25px] w-[25px]"
//           onClick={handlePrevious}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="20"
//             viewBox="0 96 960 960"
//             width="20"
//           >
//             {" "}
//             <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//           </svg>
//         </motion.div>

//         <motion.div
//           variants={slidersVariants}
//           className="right-0 bg-slate-800 text-white p-3 mx-[20px] rounded-[50%] absolute top-0 bottom-0 my-auto h-[25px] w-[25px]"
//           whileHover="hover"
//           onClick={handleNext}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="20"
//             viewBox="0 96 960 960"
//             width="20"
//           >
//             <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// export default Carousel;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Slides } from "../DUMMY_DATA";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper/modules";

export default function Carousel({ text }) {
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        slideShadow={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,

            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,

            slidesPerGroup: 4,
          },
          1400: {
            slidesPerView: 5,

            slidesPerGroup: 5,
          },
        }}
        className=""
      >
        {Slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            id={slide.key}
            className="
             mr-3 text-center flex justify-center items-center cursor-pointer 
             rounded-[16px] overflow-hidden transform-[translateZ[0]] transition-all 
             [&>div>img]:hover:scale-110 [&>div]:hover:shadow-black/30 
              [&>div>div]:hover:bg-gradient-to-t [&>div>div]:hover:backdrop-brightness-100  "
          >
            <div
              className="absolute z-10 w-100 bottom-0 right-0 left-0 h-100 
              flex flex-col justify-end"
            >
              <span className="text-2xl truncate">{slide.title}</span>
              <span>{slide.category}</span>
            </div>
            <div className="relative  h-[180px] object-contain sm:w-[100%] 
              sm:max-h-[220px] z-1 bg-cover">
              <div className=" absolute z-10 w-full h-100  
              backdrop-brightness-75 
              from-[#0000004a] via-none to-none"/>
              <img
                src={slide.image}
                alt=""
                className="transition duration-300  ease-in-out "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 
    </>
  );
}
