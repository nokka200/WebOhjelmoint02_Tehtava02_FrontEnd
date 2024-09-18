import WordsService from "../services/words";
import { useState } from "react";
import BackButton from "./BackButton";

const SearchWord = () => {
  const [wordSearch, setWordSearch] = useState('');
  const [word, setWord] = useState('');

  const handleSearch = async (event) => { 
    event.preventDefault();
    const result = await WordsService.getWords(wordSearch);
    if (result.status === 200) {
      setWord(result.data.translation);
      setWordSearch('');
    } else {
      setWord('Sanaa ei löytynyt');
    }
  };

  return (
    <>
      <h1>Etsi sanaa</h1>
      <BackButton />
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Aseta sana" required onChange={event => setWordSearch(event.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <h2>Haettu sana: {word}</h2>
    </>
  )
};

export default SearchWord;