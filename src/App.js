import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import Footer from "./Footer";

import { EmployeeAdd } from "./employee/EmployeeAdd";
import { EmployeeTest } from "./employee/EmployeeTest";
import { Product } from "./Product";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./user/AboutUs";
import { FeedBack } from "./user/FeedBack";
import { ContactUs } from "./user/ContactUs";
import { UserNavbar } from "./user/UserNavbar";
import { Contact } from "./user/Contact";
import { TestApi } from "./api/TestApi";
import { PostApiTest } from "./api/PostApiTest";
import { DropDown } from "./DropDown";
import { CutomeHookTest } from "./CutomeHookTest";
import { DleetApi } from "./api/DleetApi";
import { Employee } from "./query/Employee";
import { RegisterEmployee } from "./query/RegisterEmployee";
import { Content } from "./context/Content";
import { AppContext } from "./context/context";
import { Task1 } from "./Task1";

function App() {
  var x = 4500;

  var style = {
    color: "red",
  };
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
        <Task1/>
        {/* <UserNavbar/> */}
        {/* <Employee/>
        <RegisterEmployee/> */}
        <AppContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<UserNavbar />} />
            <Route path="/user/aboutus" element={<AboutUs />} />
            <Route path="/user/contactus" element={<ContactUs />} />

            <Route path="/user/feedback/:id" element={<FeedBack />} />
            <Route path="/user/contactus/:name" element={<Contact />} />
            <Route path="/api/get" element={<TestApi />} />
            <Route path="/api/post" element={<PostApiTest />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </AppContext.Provider>

        {/* <CutomeHookTest/> */}
        {/* <DleetApi/> */}
        {/* <Product/> */}
        {/* <Header/>
      
      <br/><br/><br/>
      <Employee value = {x}/> */}
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
