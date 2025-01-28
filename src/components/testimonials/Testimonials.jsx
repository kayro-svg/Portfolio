import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">My clients say</h2>
      <span className="section_subtitle">Testimonials</span>

      {/* <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, imgWidth, squareImg }) => {
          return (
            <>
              <SwiperSlide className="testimonial_card" key={id}>
                <img
                  src={image}
                  alt=""
                  className={
                    squareImg ? "testimonial_img_square" : "testimonial_img"
                  }
                />
                <h3 className="testimonial_name">{title}</h3>
                <p className="testimonoal_description">{description}</p>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper> */}

      <div className="testimonial_container_masonry">
        {Data.map(({ id, image, title, description, imgWidth, squareImg }) => {
          return (
            <div className="testimonial_card_masonry" key={id}>
              <div className="testimonial_img_name">
                <img
                  src={image}
                  alt=""
                  className={
                    squareImg
                      ? "testimonial_img_square_masonry"
                      : "testimonial_img_masonry"
                  }
                  style={{ width: imgWidth }}
                />
                <h3 className="testimonial_name_masonry">{title}</h3>
              </div>
              <p className="testimonial_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
