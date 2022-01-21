import Products from '../Products';
import './FeaturedInstrument.scss';

const FeaturedInstrument = () => {
  return (
    <section className="featured-instrument">
      <h1>
        INSTRUMENTOS <span>DESTAQUE</span>
      </h1>
      <p>
        it is a long established fact that a reader will be destracted by the
        readable
      </p>
      <Products />
    </section>
  );
};

export default FeaturedInstrument;
