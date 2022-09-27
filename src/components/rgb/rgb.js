import { useParams } from 'react-router-dom';

export default function RGB() {
  let { r, g, b } = useParams();

  return (
    <div className="color">
      <h3>RGB: {`${r} ${g} ${b}`}</h3>
    </div>
  );
}
