import { useNavigate } from 'react-router-dom';

/**
 * Tämä komponentti toimii takaisin-nappina, jolla palataan etusivulle
 * @returns 
 */
const BackButton = () => { 
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>Takaisin</button>
  );
};

export default BackButton;