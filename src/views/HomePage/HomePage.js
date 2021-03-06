import logo from 'assets/img/logo.png';
import React from "react";
import "./homepage.css";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <div id="logo-div">
            <img src="https://i.imgur.com/medNt9h.png" alt="Logo" />
          </div>
          <h1 id="heading">Wilfrid Laurier University Robotics
            <p>Founded in 2016</p>
          </h1>
        </div>
      </>
    );
  }
}
export default HomePage;
