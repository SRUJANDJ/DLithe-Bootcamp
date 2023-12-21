import { Component } from "react";



class Counting extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        this.handleclick=this.handleclick.bind(this);
    }
    handleclick(){
        this.setState(preState=>({
            count:preState.count+1
        }));
    }
    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleclick}>click here</button>
        </div>
      )
    }
}
export default Counting;