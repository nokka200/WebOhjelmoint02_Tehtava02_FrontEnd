import { useNavigate } from 'react-router-dom';

/**
 * Tämä komponentti toimii React app etusivuna
 * @returns 
 */
const FrontPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <h1>Sanakirja App</h1>
      <button onClick={() => navigate('/add')}>Sanan lisäys</button>
      <button onClick={() => navigate('/search')}>Sanan haku</button>
    </>
  );
};

export default FrontPage;