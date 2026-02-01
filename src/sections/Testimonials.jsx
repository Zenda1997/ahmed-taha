import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';



export const Testimonials = () => {
 
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto  
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Snapshot of My Work
          </span>
          <h2
            className="text-3xl md:text-4xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            A glimpse into my{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              creative journey.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className=" w-full  grid sm:grid-cols-3 gap-6">

        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-2 rounded-3xl md:p-3 glow-border animate-fade-in animation-delay-200">
              

             

              <div className="flex items-center gap-4">
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
      </Swiper>
               
                <div>
                  <div className="font-semibold">
                   
                  </div>
                  <div className="text-sm text-muted-foreground">
                   
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-2 rounded-3xl md:p-3 glow-border animate-fade-in animation-delay-200">
              

             

              <div className="flex items-center gap-4">
                <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Ahmed-Taha-CV (2).jpeg" />
        </SwiperSlide>
      </Swiper>
               
                <div>
                  <div className="font-semibold">
                   
                  </div>
                  <div className="text-sm text-muted-foreground">
                   
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-2 rounded-3xl md:p-3 glow-border animate-fade-in animation-delay-200">
              

             

              <div className="flex items-center gap-4">
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
      </Swiper>
               
                <div>
                  <div className="font-semibold">
                   
                  </div>
                  <div className="text-sm text-muted-foreground">
                   
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
