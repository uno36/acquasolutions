import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardLayout from './CardLayout';


  
const Home = () => {

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h1 className="text-center my-3">Welcome to Acquasolutions</h1>
      <p className="text-center">
        "Enjoy crystal-clear water that's perfect for drinking, cooking, and
        bathing."
      </p>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="my-5 bg-dark"
      >
        <Carousel.Item>
          <img
            src="images/slideimge1.png"
            alt="First slide"
            className="slideimg1"
          />
          <Carousel.Caption>
            <h3>Water Treatment</h3>
            <p>
              Invest in your health. Let us provide you with pure, refreshing
              water every day.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/slideimg2.png"
            alt="Second slide"
            className="slideimg1"
          />
          <Carousel.Caption>
            <h3>Expert Engineers</h3>
            <p>Solving problems others deem impossible.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="images/slideimg3.png"
            alt="Third slide"
            className="slideimg1"
          />
          <Carousel.Caption>
            <h3>State Of The Art Boreholes & Drilling</h3>
            <p>
              Drilling deeper, reaching further with cutting-edge technology.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardLayout />
    </div>
  );
}

export default Home;
