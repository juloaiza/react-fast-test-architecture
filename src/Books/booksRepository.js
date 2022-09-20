import HttpGateway from "../Shared/HttpGateway";
import Observable from "../Shared/Observable";

class BooksRepository {
  httpGateway = null;
  booksProgrammersModel = null;

  constructor() {
    this.httpGateway = new HttpGateway();
    this.booksProgrammersModel = new Observable([]);
  }

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(
      "https://api.logicroom.co/api/julian.loaiza@gmail.com/books"
    );
    this.booksProgrammersModel.value = booksDto.result.map((bookDto) => {
      return { name: bookDto.name };
    });
  };

  getBooks = async (callbackFn) => {
    this.booksProgrammersModel.subscribe(callbackFn);
    await this.loadApiData();
    this.booksProgrammersModel.notify();
  };
}

//singleton initiation
const booksRepository = new BooksRepository();
export default booksRepository;
