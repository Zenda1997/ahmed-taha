import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

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
      px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16">
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in">
            Snapshot of My Work
          </span>
          <h2
            className="text-3xl md:text-4xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground">
            A glimpse into my{" "}
            <span
              className="font-serif italic 
            font-normal text-white">
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
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
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
                    className="mySwiper">
                    <SwiperSlide>
                      <img src="./h1 copy.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h1.jpg" />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <img src="./h4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h11.jpg" />
                    </SwiperSlide>
                  </Swiper>

                  <div>
                    <div className="font-semibold"></div>
                    <div className="text-sm text-muted-foreground"></div>
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
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
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
                    className="mySwiper">
                    <SwiperSlide>
                      <img src="./h12.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h13.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h14.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h15.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h16.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h17.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h18.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h19.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h20.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h21.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./h22.jpg" />
                    </SwiperSlide>
                  </Swiper>

                  <div>
                    <div className="font-semibold"></div>
                    <div className="text-sm text-muted-foreground"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="glass  p-2 rounded-3xl md:p-3 glow-border animate-fade-in animation-delay-200">
                <div className="flex mb-20 items-center gap-4">
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
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
                    className="mySwiper">
                    <SwiperSlide>
                      <img src="./w10.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w11.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w12.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w13.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w14.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w15.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w16.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="./w9.jpg" />
                    </SwiperSlide>
                  </Swiper>
                  <div>
                    <div className="font-semibold"></div>
                    <div className="text-sm text-muted-foreground"></div>
                  </div>
                </div>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
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
                  className="mySwiper">
                  <SwiperSlide>
                    <img src="./w1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./w8.jpg" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
