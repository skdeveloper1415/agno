import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VerticalMode() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings} className='w-full text-center text-2xl lg:text-[70px]'>
        <div>
          <h3>model agnostic</h3>
        </div>
        <div>
          <h3>blazing fast</h3>
        </div>
        <div>
          <h3>future proof</h3>
        </div>
        <div>
          <h3>model agnostic</h3>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalMode;
