import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import brands from '../images/brands.png';
import './About.scss';

const About = () => {
  return (
    <article className="about">
      <div className="info">
        <p>
          AS <span>MELHORES</span> MARCAS
        </p>
      </div>
      <div className="info-brands">
        <p>
          it is a long established fact that a reader will be destracted by the
          readable
        </p>
      </div>
      <div className="brands">
        <img src={brands} alt="Best brands" />
      </div>
      <div className="arrows">
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
      <div className="about-details">
        <h1>SOBRE NÓS</h1>
        <div className="text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Lorem Ipsum as their default model
            text, and a search for ‘lorem ipsum’ will uncover many web sites
            still in their infancy. Lorem Ipsum as their default model text, and
            a search for ‘lorem ipsum’ will uncover many web sites still in
            their infancy.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
