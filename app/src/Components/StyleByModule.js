import React, { Component } from 'react'
import style from './Style.module.css'

export default class StyleByFile extends Component {
  render() {
    return (
      <div className={style.container}>
        <form>
            <div className={style.inputs}>
            <label>Username</label>
            <br/>
            <input type='text'/>
            </div>
            <div className={style.inputs}>
            <label>password</label>
            <br/>
            <input type='password'/>
            </div>
            <div className={style.inputs}>
            <button>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
