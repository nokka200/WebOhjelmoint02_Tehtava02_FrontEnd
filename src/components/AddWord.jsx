import { useState } from "react";
import WordsService from "../services/words";
import BackButton from "./BackButton";

const AddWord = () => {
  const [finnishWord, setFinnishWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");

  const handleWord = async (event) => {
    event.preventDefault();
    const data = {
      fin: finnishWord,
      eng: englishWord
    };
    const result = await WordsService.postWords(data);
    if (result.status === 201) {
      setFinnishWord('');
      setEnglishWord('');
      alert('Sana lisätty');
    } else {
      setFinnishWord('Virhe');
    }

  };

  return (
    <>
      <h2>Lisää sana</h2>
      <BackButton />
      <form onSubmit={handleWord}>
        <label>
          Suomi:
          <input type="text" placeholder="Sana" onChange={event => setFinnishWord(event.target.value)} value={finnishWord} />
        </label>
        <br />
        <label>
          Englanti:
          <input type="text" placeholder="Word" onChange={event => setEnglishWord(event.target.value)} value={englishWord} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
};

export default AddWord;