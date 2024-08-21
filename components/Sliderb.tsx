"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import Link from "next/link";

type MoviePopular = {
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  name: string;
  release_date: string;
  id: string;
  // Otras propiedades que te interese mostrar
};

type PopularProps = {
  popular: MoviePopular[];
};

const Sliderb = ({ popular }: PopularProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2300,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper sm:grid sm:grid-cols-1"
    >
      {popular.map((mapeo, index) => (
        <SwiperSlide key={index}>
          <Card>
            <Link href={`/movie/${mapeo.id}`}>
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${mapeo.poster_path})`,
                }}
                className="bg-cover flex flex-col items-center  rounded-lg"
              >
                <h1 className="text-lg font-bold truncate ">
                  {/* {mapeo.original_title || mapeo.name} */}
                </h1>
                {/* <p className="line-clamp-2">{mapeo.overview}</p> */}
                {/* poster_path */}
                <div className=" w-full h-[300px]">
                  {/* <Image
                  src={`https://image.tmdb.org/t/p/original/${mapeo.poster_path}`}
                  alt=""
                  width={800}
                  height={300}
                  className="hover:opacity-55"
                /> */}
                  {/* <p className="">{mapeo.release_date}</p> */}
                </div>
              </div>
            </Link>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliderb;
