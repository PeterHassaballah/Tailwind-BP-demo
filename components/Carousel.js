import Image from './Image'
import Link from './Link'

const Carousel = ({ title, description, imgSrc, href }) => (
  <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner relative w-full overflow-hidden">
      <div className="carousel-item active relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute hidden text-center md:block">
          <h5 className="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute hidden text-center md:block">
          <h5 className="text-xl">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute hidden text-center md:block">
          <h5 className="text-xl">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
)
export default Carousel
