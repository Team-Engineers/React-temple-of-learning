import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.css"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const HomeSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper  h-[100%] w-[90%]"
            >
                <SwiperSlide ><img src={require("../../assets/images/slider/1 year result-oriented program (1).png")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require("../../assets/images/slider/We are the only specialists exclusively training students (7).png")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require("../../assets/images/slider/2 Years Success-Guaranted Program.png")} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require("../../assets/images/slider/Super - 40.png")} alt="" /></SwiperSlide>
            </Swiper>
            <div className="my-6 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <Link to="/two-year-program">
                        <div className=" p-4 rounded-md text-start">
                            <h4  className="text-white font-bold text-[160%]">2 Year Program</h4>
                            <p className="text-white">
                                • Most comprehensive training <br />
                                • 500+ hours of training <br />
                                • 24*7 one on one mentoring <br />
                                • Unlimited support / guidance

                            </p>
                        </div>
                    </Link>

                    <Link to="/one-year-program">
                        <div className=" p-4 rounded-md text-start">
                            <h4 className="text-white font-bold text-[160%]">1 Year Program</h4>
                            <p className="text-white">
                                • 350+ hours of training <br />
                                • 24*7 one on one mentoring <br />
                                • Unlimited support / guidance <br />
                                • Recorded videos and mock test
                            </p>
                        </div>
                    </Link>

                    <Link to="/crash-course">
                        <div className=" p-4 rounded-md text-start">
                            <h4  className="text-white font-bold text-[160%]">Crash Course</h4>
                            <p className="text-white">
                                • 200 + hours of intensive Training <br />
                                • Maximum personalized attention <br />
                                • Most experienced faculty <br />
                                • Latest study material with past year papers
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default HomeSlider