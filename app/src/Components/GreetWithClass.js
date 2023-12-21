import { Component } from "react";

class GreetWithClass extends Component{
    constructor(props){
        super(props);
        this.age=20
    }
    render() {
      return (
        <div>
          <h1>Hello from class</h1>
          <h2>age:{this.props.age}</h2>
          <h3>age:{this.age}</h3>
        </div>
      )
    }
}
export default GreetWithClass;