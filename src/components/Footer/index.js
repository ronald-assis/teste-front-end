import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import comment from '../images/comment.png';
import cardFlags from '../images/cardFlags.png';
import security from '../images/security.png';
import cnpj from '../images/cnpj.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="comments">
        <IoIosArrowBack />
        <img src={comment} alt="Comment" />
        <IoIosArrowForward />
      </div>
      <div className="information">
        <div className="institutional info">
          <h1>INSTITUCIONAL</h1>
          <div className="who-we-are">
            <p>QUEM SOMOS</p>
            <p>NOSSAS LOJAS</p>
          </div>
          <div className="attendance">
            <h1>ATENDIMENTO</h1>
            <div className="contact-us">
              <p>FALE CONOSCO</p>
              <p>VENDAS@NINJASOM.COM.BR</p>
            </div>
          </div>
        </div>
        <div className="help-and-support info">
          <h1>AJUDA E SUPORTE</h1>
          <div className="policies">
            <p>POLÍTICA DE PRIVACIDADE</p>
            <p>POLÍTICA DE TROCAS</p>
            <p>PRAZOS DE ENTREGA</p>
            <p>TERMOS DE USO</p>
          </div>
        </div>
        <div className="playment methods info">
          <h1>FORMAS DE PAGAMENTO</h1>
          <div className="card-flags">
            <img src={cardFlags} alt="Card Flags" />
          </div>
          <div className="security">
            <h1>SEGURANCA</h1>
            <div className="security-img">
              <img src={security} alt="Security image" />
            </div>
          </div>
        </div>
        <div className="form">
          <p>
            ASSINE NOSSO <span>NEWSLETTER</span> E RECEBA NOVIDADES E PROMOCÕES
          </p>
          <label htmlFor="user">
            <input type="text" name="user" id="user" placeholder="SEU NOME" />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="SEU EMAIL"
            />
          </label>
          <button>ENVIAR</button>
        </div>
      </div>
      <div className="company-cnpj">
        <img src={cnpj} alt="Company's CNPJ" />
      </div>
    </footer>
  );
};

export default Footer;
