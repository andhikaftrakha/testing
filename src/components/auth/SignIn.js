import React, { Component } from 'react'
import axios from 'axios'

class Signin extends Component {

    constructor() {
        super()

        this.state = {
            username:"",
            password:""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const form_login = {
            username:this.state.username,
            password:this.state.password
        }

        axios.post('http://localhost:8080/api/account/login', form_login)
        .then(function(result) {
            console.log(result)
            var data = result.data
            console.log("Type data :" + typeof(data))
            if(result.status>=400 || result.status<200){
                throw new Error('login fail')
            }else{
                if(data['status']=='success') {
                    alert(data['message'])
                    window.localStorage.setItem('is_login', 'Y')
                    window.location.href = '/'
                }else{
                    alert(data['message'])
                }
               
            }
        })
        .catch(function(error){
            console.log(error)
        })


    }
    render() {
        return (
          <div className="container">
            
            <form className="white" onSubmit={this.onSubmit}>
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input type="text" name='username' onChange={this.handleChange} value={this.state.username} onChange={this.onChange} required/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' onChange={this.handleChange} value={this.state.password} onChange={this.onChange} required/>
              </div>
               <div className="clearfix">
                <button type="submit" className="btn pink lighten-1 z-depth-0" >Login</button>
              </div>
            </form>
          </div>
        )
      }
    }
    
    export default Signin