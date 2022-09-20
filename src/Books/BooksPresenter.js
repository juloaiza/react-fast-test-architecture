import bookRepository from "../Books/booksRepository";

class BooksPresenter {
  // load = async () => {
  //   const booksProgrammerModel = await bookRepository.getBooks();
  //   const booksViewModel = booksProgrammerModel.map((bookPm) => {
  //     return { visibleName: bookPm.name };
  //   });
  //   return booksViewModel;
  // };

  load = async (callbackFn) => {
    //Callback function
    const booksProgrammersModelFn = (booksProgrammersModel) => {
      const booksViewModel = booksProgrammersModel.map((bookPm) => {
        return { visibleName: bookPm.name };
      });
      //Trigger the funciton to generatedBooksViewModel
      callbackFn(booksViewModel);
    };
    bookRepository.getBooks(booksProgrammersModelFn);
  };
}

export default BooksPresenter;
