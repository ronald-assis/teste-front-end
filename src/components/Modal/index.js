import { IoIosClose, IoIosArrowForward } from 'react-icons/io';
import './Modal.scss';

const Modal = ({ item, setModal }) => {
  const handleClick = () => {
    setModal(false);
  };

  return (
    <section className="modal">
      <div className="modal-details">
        <button onClick={handleClick}>
          <IoIosClose className="close" />
        </button>
        <div>
          <img src={item.photo} alt={item.productName} />
          <div className="details">
            <h3 className="product-name">{item.productName}</h3>
            <h1 className="product-price">{`R$ ${item.price.toFixed(2)}`}</h1>
            <p className="product-datails">{item.descriptionShort}</p>
            <a className="more-dateils">
              <span>Veja mais detalhes do produto </span>
              <span>
                <IoIosArrowForward className="arrow-for-ward" />
              </span>
            </a>
            <button>Adicionart ao carrinho</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
