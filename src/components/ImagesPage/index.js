import Instruments from '../images/instruments.png';
import NewProducts from '../images/NewProducts.png';
import News from '../images/news.png';
import './ImagesPage.scss';

const ImagesPage = () => {
  return (
    <section className="products-images">
      <img src={NewProducts} alt="New products illustration" />
      <img src={Instruments} alt="Instrumewnts illustration" />
      <img src={News} alt="New products" />
    </section>
  );
};

export default ImagesPage;
