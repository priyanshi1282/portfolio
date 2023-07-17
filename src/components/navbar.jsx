import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div className="navbar py-4 px-4 bg-red-400">
        <div className="desktop w-full bg-purple-400 flex justify-center">
          <ul className='flex justify-evenly w-1/2'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Skills</li>
          </ul>
        </div>
        <div className="responsive w-full bg-yellow-300">
          <div className="nav flex justify-between">
            <h2>logo</h2>
            <button>icon</button>
          </div>
          <div className="dropdown">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div>
        </div>
      </div>
      
    )
  }
}
