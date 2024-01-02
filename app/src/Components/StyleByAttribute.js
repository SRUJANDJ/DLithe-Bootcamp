import React, { Component } from 'react'


export default class StyleByFile extends Component {
    
  render() {
    const container={
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const inputs={
        margin:"10px"
    }
    const button={
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        borderWidth: "0",
        padding: "5px",
    }
    const form={
        backgroundColor: "rgb(15, 73, 172)",
        padding: "30px",
        color: "white",
        borderRadius: "20px",
        textAlign: "left"
    }
    return (
      <div style={container}>
        <form style={form}>
            <div style={inputs}>
            <label>Username</label>
            <br/>
            <input type='text'/>
            </div>
            <div style={inputs}>
            <label>password</label>
            <br/>
            <input type='password'/>
            </div>
            <div style={inputs}>
            <button style={button}>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
