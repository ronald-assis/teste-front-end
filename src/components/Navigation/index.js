import { IoMdArrowDropdown } from 'react-icons/io';
import './Navigation.scss';

const Navigation = () => {
  return (
    <section className="navigation">
      <div>
        <h3>TODAS AS CATEGORIAS</h3>
        <IoMdArrowDropdown />
      </div>

      <div>
        <h3>SOM PROFISSIONAL</h3>
        <IoMdArrowDropdown />
      </div>

      <div>
        <h3>SOM PROFISSIONAL</h3>
      </div>

      <div>
        <h3>PROMOÇÕES</h3>
      </div>

      <div className="contact">
        <h3>CONTATO</h3>
      </div>
    </section>
  );
};

export default Navigation;
