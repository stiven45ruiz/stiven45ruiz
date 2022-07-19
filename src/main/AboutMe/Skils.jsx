import React from "react";
import './AbautMe.css';


import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const skils = [
  {
    key:1,
    alt:"HTML",
    src:"https://i.ibb.co/GWpHnqB/html-5.png" 
  },
  {
    key:2,
    alt:"CSS",
    src:"https://i.ibb.co/hVQmSFf/css.png"
  },
  {
    key:3,
    alt:"Sass",
    src:"https://i.ibb.co/ck1GQm5/sass.png" 
  },
  {
    key:4,
    alt:"JavaScript",
    src:"https://i.ibb.co/L1whsVf/js.png" 
  },
  {
    key:5,
    alt:"TypeScript",
    src: "https://i.ibb.co/2qRp8Kh/typescript.png"
  },
  {
    key:6,
    alt:"React",
    src:"https://i.ibb.co/yFnb8Dv/React.png" 
  },
  {
    key:7,
    alt:"Angular",
    src:"https://i.ibb.co/ZgL78qS/Angular-logo-svg.png" 
  },
  {
    key:8,
    alt:"NodeJs",
    src:"https://i.ibb.co/xfQYNRx/nodejs-logo-com.png" 
  },

]



function Skils(){
  return(
    <div 
      className="skils__container"
    >

      <Swiper 
      watchSlidesProgress={true} 
      slidesPerView={"auto"} 
      className="mySwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      >

        {
          skils.map(skil=>(
            <SwiperSlide
              key={skil.key}
              className="skils__picture"
            >
              <picture >
                <img 
                  src={skil.src} 
                  alt={skil.alt}
                  className="skils__image"
                />
                
              </picture>
              
            </SwiperSlide>

          ))
        }
        
      </Swiper>
    </div>
  )
}

export {Skils}