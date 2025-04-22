import React from 'react';
// import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper 
                spaceBetween={30}
                slidesPerView={3}
                
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Abhi Shukla
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have used their home services and was very satisfied. The professionals were highly skilled, and the service quality was excellent. They truly provide the best home services."
"
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Shiv Pratap Singh
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have used their home services and was very satisfied. The professionals were highly skilled, and the service quality was excellent. They truly provide the best home services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Abhi Bhargav
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have used their home services and was very satisfied. The professionals were highly skilled, and the service quality was excellent. They truly provide the best home services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Keshav Raj
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have used their home services and was very satisfied. The professionals were highly skilled, and the service quality was excellent. They truly provide the best home services."
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-black'>
                                    Vanshika Somvanshi
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                    <HiStar className='text-[#e2ca42] w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "I have used their home services and was very satisfied. The professionals were highly skilled, and the service quality was excellent. They truly provide the best home services."
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
