import React from "react";
import Banner from "../Images/Banner.jfif";
import "../components/main.css";




const Main = () => {
     
  return (
    <>
      <div class="container">
        <img src={Banner} alt="banner images" width={"100%"} height={"500px"} />
        <div class="centered">
          <input type="text" />
          <button>Search</button>
        </div>
      </div>

    </>
  );
};

export default Main;
