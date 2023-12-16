
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../asssests/Frame 10.jpg';
import img2 from '../asssests/Frame 11.jpg';
import img4 from '../asssests/fram20.png';
import img5 from '../asssests/frame69.png';

const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "120x",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };

const Gallery = () => {
  return (
    <div>
        
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" className="w-[360px] h-[400px]" />
          </div>
          <div>
          <img src={img4} alt="" className="w-[360px] h-[400px]" />
          </div>
          <div>
          <img src={img2} alt="" className="w-[360px] h-[400px]"/>
          </div>
          <div>
          
          <img src={img5} alt="" className="w-[360px] h-[400px]"/>
          </div>
         
          
          
        </Slider>
        <div className="flex justify-center mt-20">
        <div className="w-[273px] h-[62px] px-[34px] py-4 rounded-lg shadow-inner border border-gray-600 justify-center gap-2.5 inline-flex">
          <button className="text-gray-600 text-xl font-bold ">View recent work</button>
        </div>
      </div>
      </div>
  )
}

export default Gallery