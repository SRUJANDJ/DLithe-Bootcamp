import { Component } from "react";


class Count extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    };
    increment=()=>{
        this.setState({count: this.state.count +1 });
    }
    
    render()
    {
        return (
            <div>
                <p>{this.state.count}</p>
                <button className="btn btn-danger" onClick={this.increment}>click here</button>
            </div>
        )
    }
    
    
}

export default Count;