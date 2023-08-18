"use client";
import { RxCalendar } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
const Slide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="slider-top">
        <h2>Latest Blog</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <Card className="slide-item me-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Rectangle2155.png" />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Rectangle2157.png" />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Permalink to New World Wide Payment</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Rectangle2159.png" />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Exchange Rate ofBitcoin system</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="slide-item" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card.Body>
              <div className="d-flex align-item-center ">
                <RxCalendar className="mt-1 me-1" />
                <p>10 January 2023</p>
              </div>
              <Card.Title>Bitcoin and Economic Freedom</Card.Title>
              <p className="slider-link mt-4">Read More</p>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
