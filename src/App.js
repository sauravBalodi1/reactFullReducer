import logo from './logo.svg';
import './App.css';
import TodoListItem from './todos/TodoListItem';
import React from "react"
import Header from './header/Header';
import Footer from "./footer/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
     <TodoListItem/>
  <Footer />
     
    </div>
  );
}

export default App;
