/* eslint no-use-before-define: 0 */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode, useRef } from "react";
import images from "../assets/Images/images";




interface Image {
    id: number;
    src: string;
    alt: string;
  }

  interface ImageCarouselProps {
    images: Image[]; // En array av Image-objekt
  }
  interface Settings {
    infinite?: boolean;
    customPaging?: (index: number)=> ReactNode ;
  }

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const carousel = useRef<Slider>(null);
  const settings:Settings = {
    infinite: true,
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={images[i].src}
            height="50%"
            width="50%"
            alt={images[i].alt}
          />
        </a>
      );
    },
    autoplay: true, //this line enables autoplay.
    autoplaySpeed: 1000,
    cssEase: "linear",
    dots: false,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  //This code displays the slideshow.
  return (
    <div>
      <Slider {...settings} ref={carousel}>
        {images.map((item: Image) => (
          <div key={item.id}>
            {" "}
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
