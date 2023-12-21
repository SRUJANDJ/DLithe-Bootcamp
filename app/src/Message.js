import { Component } from "react";


class Message extends Component{
    constructor(){
        super();
        this.state={message:"welcome visitor"};
    };
    changemessage=()=>{
        this.setState({message:"thankyou"});
    }
    render() {
      return (
        <div>
          <p>{this.state.message}</p>
          <button onClick={this.changemessage}>Subscribe</button>
        </div>
      )
    }
}
export default Message;