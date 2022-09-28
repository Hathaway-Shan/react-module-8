import './rgb.css';
import { useParams } from 'react-router-dom';

export default function RGB() {
  let { r, g, b } = useParams();

  return (
    <div className="color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h3>RGB: {`${r} ${g} ${b}`}</h3>
    </div>
  );
}
