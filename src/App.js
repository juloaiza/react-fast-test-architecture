import { useEffect, useState } from "react";
import {BooksComponent} from "./Books/BooksComponent";

export default function App() {

  //React View
  return (
    <div>
      <h1>Book List</h1>
      <BooksComponent/>
    </div>
  );
}
