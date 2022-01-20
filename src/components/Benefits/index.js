import { GiPadlock } from 'react-icons/gi';
import { RiNumber1 } from 'react-icons/ri';
import { FiPercent, FiTruck } from 'react-icons/fi';
import './Benefits.scss';

const Benefits = () => {
  return (
    <section className="benefits">
      <div>
        <GiPadlock />
        <h3>COMPRA 100%</h3>
      </div>

      <div>
        <RiNumber1 />
        <p>TROCA GRÁTIS</p>
      </div>

      <div>
        <FiPercent />
        <p>5% SEM JUROS</p>
      </div>

      <div className="free">
        <FiTruck />
        <p>ENTREGAS EM TODO O BRASIL</p>
      </div>
    </section>
  );
};

export default Benefits;
