import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";
import { Employee } from "./employee/Employee";

function App() {

  var x =4500;

  var style ={
    color: "red",
  }
  var no1 = 10;
  var per = 12.5;
  var name = "John";
  var isTrue = false;
  var user = {
    name: "John",
    age: 30,
    isMarried: true,
    city: "New York",
  };

  return (
    <>
      
      <div className="App">
      <Header/>
      <Employee value = {x}/>
        {/* <h1>No1 = {no1}</h1>
        <h1>Per = {per}</h1>
        <h1>Name = {name}</h1>
        <h1>isTrue = {isTrue == true ? "TRUE" : "FALSE"}</h1>
        <h2 style={style}>{user.name}</h2>
        <h2>{user.age}</h2>
        <h2>{user.isMarried ? "yes" : "no"}</h2>
        <h2>{user.city}</h2> */}
        
      </div>
    </>
  );
}

export default App;
