 
import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunComp from "./Profile";
import Profile from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parenent compoenetDidMount");
    // this.timer = setInterval(()=>{console.log('Namaste React')},1000);
  }

  componentDidUpdate(prevProps, prevState) {
    
    // console.log("parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("parent componentWillUnmount");
    // clearInterval(this.timer)
  }
  render() {
    //console.log("parent render");
    return (
      <>
        <h1>About Us page class component</h1>
        <p>This is about us page, you can know about us </p>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <ProfileFunComp name="Akshaya Class" />
      </>
    );
  }
}

export default About;
