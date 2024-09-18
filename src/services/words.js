import axios from "axios";

class WordsService {
    static baseUrl = "http://localhost:3000/api/words/";

  static async postWords(data) {
      const response = await axios.post(this.baseUrl, data);
      return response;
  }

  static async getWords(target) { 
    const response = await axios.get(`${this.baseUrl}${target}`);
    return response;
  }
}

export default WordsService;