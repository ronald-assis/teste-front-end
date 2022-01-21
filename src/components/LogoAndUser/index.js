import { FaRegUser } from 'react-icons/fa';
import { BsWhatsapp, BsSearch } from 'react-icons/bs';
import logo from '../images/logo.png';
import './LogoAndUser.scss';

const LogoAndUser = () => {
  return (
    <section className="logo-and-user">
      <div className="logo">
        <img src={logo} alt="Ninja Som logo" />
      </div>
      <label className="search-input">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="BUSQUE AQUI..."
        />
        <BsSearch />
      </label>

      <div className="whatsapp">
        <BsWhatsapp />
        <span>(11) 99999-9999</span>
      </div>

      <div className="user">
        <FaRegUser />
        <div className="name-user">
          <h3>OLÁ, VISITANTE</h3>
          <p>MINHA CONTA</p>
        </div>
      </div>
    </section>
  );
};

export default LogoAndUser;
