import React, { Component } from 'react'
import Aboutme from '../appointments/Aboutme'

class Dashboard extends Component {
    constructor() {
    super()

    this.state = {

    }

    this.onClick = this.logout.bind(this)
  }

  logout(e) {
    window.localStorage.setItem('is_login', 'N')
    window.location.href='/'
  }
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Aboutme />
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
