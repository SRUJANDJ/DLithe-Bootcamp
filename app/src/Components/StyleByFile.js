import React, { Component } from 'react'
import './StyleByFile.css'

export default class StyleByFile extends Component {
  render() {
    return (
      <div className='container'>
        <form>
            <div className='inputs'>
            <label>Username</label>
            <br/>
            <input type='text'/>
            </div>
            <div className='inputs'>
            <label>password</label>
            <br/>
            <input type='password'/>
            </div>
            <div className='inputs'>
            <button>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
