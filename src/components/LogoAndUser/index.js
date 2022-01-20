import { FaRegUser } from 'react-icons/fa';
import { BsWhatsapp, BsSearch } from 'react-icons/bs';
import './LogoAndUser.scss';

const LogoAndUser = () => {
  return (
    <section className="logo-and-user">
      <h1>NINJA SOM</h1>
      <div className="search-input">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="BUSQUE AQUI..."
        />
        <BsSearch />
      </div>

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
