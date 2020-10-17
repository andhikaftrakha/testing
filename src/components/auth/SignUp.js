import React, { Component } from 'react'
import axios from 'axios'
class Signup extends Component {
    constructor(){
        super();

        this.state= {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            address:"",
            password: "",
            phoneNumber: "",
            services: "",
            workingDays: "",
            workingHours: "",
            redirect_url: null
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newAccount = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            services: this.state.services,
            workingDays: this.state.workingDays,
            workingHours: this.state.workingHours
        }

        console.log(newAccount);
        axios.post('http://localhost:8080/api/account', newAccount)
        .then(function(result) {
            console.log(result)
            if(result.status >= 400 || result.status < 200) {
                throw new Error("ERROR LOGIN !");
            }else{
                alert("Signup Sucessful")
                window.location.href = '/login'
            }
        })
        .catch(function(error) {
            console.error(error.message)
            alert(error.message)
        })
    }
    render() {
        return (
          <div className="container">
            <form className="white" onSubmit={this.onSubmit}>
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input type="text" name='username'onChange={this.onChange} value = {this.state.username}/>
                
            </div>
              <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' onChange={this.onChange} value = {this.state.firstName}/>
               
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' onChange={this.onChange} value = {this.state.lastName} />
              </div>
            <div className="input-field">
            <label htmlFor="Address">Address</label>
            <input type="text" name='address' onChange={this.onChange} value = {this.state.address} />
            </div>
            <div className="input-field">
            <label htmlFor="Email">Email</label>
            <input type="text" name='email' onChange={this.onChange} value = {this.state.email} />
            </div>
            <div className="input-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name='phoneNumber' onChange={this.onChange} value = {this.state.phoneNumber}/>
            </div>
            <div className="input-field">
            <label htmlFor="Password">Create Password</label>
            <input type="password" name='password' onChange={this.onChange} value = {this.state.password} />
          </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              </div>
            </form>
          </div>
        )
      }
    }
    
export default Signup;