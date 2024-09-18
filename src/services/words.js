import axios from "axios";

/**
 * Tämä luokka sisältää metodit backendin kanssa kommunikointiin. Valitsin axios:n, koska se on minulle tutumpi kuin fetch.
 */
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