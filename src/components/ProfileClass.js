import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        avatar_url:""
      },
    };
    console.log("child - constructor ");
  }

  async componentDidMount() {
    // API CALLS
    console.log("child - componentDidMount");
    const data = await fetch("https://api.github.com/users/jatin123lodhi");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    
  }

  componentDidUpdate(){
    // if (this.state.count !== prevState.count) {
    //     //do something
    //   }
      console.log( "!!!!!!!!");
    console.log('child componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('child componentWillUnmount')
  }
  render() {
    console.log("child - render");
    return (
      <>
        <h1>Profile class component</h1>
        <h2>Class Name: {this.props.name}</h2>
        <p>Name : {this.state.userInfo.name} </p>
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
      </>
    );
  }
}

export default Profile;
