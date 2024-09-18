import { useNavigate } from 'react-router-dom';

const BackButton = () => { 
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/')}>Takaisin</button>
  );
};

export default BackButton;