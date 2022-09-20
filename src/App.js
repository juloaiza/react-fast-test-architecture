import { useEffect, useState } from "react";
import BooksPresenter from "./Books/BooksPresenter";

export default function App() {
  const [viewModel, setViewModel] = useState([123, 123, 123, 444]);
  const booksPresenter = new BooksPresenter();

  const load = async () => {
    //Callback function
    const generatedViewModelFn = (generatedViewModel) => {
      //Passing state from ViewModel to View (components/html)
      setViewModel(generatedViewModel);
    };
    await booksPresenter.load(generatedViewModelFn);
  };

  useEffect(() => {
    load();
  }, []);

  //React View
  return (
    <div>
      {viewModel.map((bookVm, i) => {
        return <div key={i}> {bookVm.visibleName} </div>;
      })}
    </div>
  );
}
