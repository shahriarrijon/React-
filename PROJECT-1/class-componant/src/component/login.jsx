import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    handleEmail = (event) => {
        console.log(this.state, event.target.value);

        this.setState({ ...this.state, email: event.target.value }) //spread oeprator

    }
    handlePassword = (event) => {
        this.setState({ ...this.state, password: event.target.value })
    }
    handleLogin = (event) => {
        event.preventDefault()
        const { email, password } = this.state; //object destructuring

        // if(email === "shahriarrijon@gmail.com"&& password ==="1969") {
        //     window.open("https://www.youtube.com/watch?v=Oidw9SjIYQs&t=2231s")
        // }
        // else{
        //     alert("invalid")
        // }
        // api method
        //    get 
        //    post
        //    delete
        //    put
        //    patch
        const body = {
            username: email,
            password,
            
        };
        const success =(response) => {
            console.log(response);
            this.setState({ ...this.state, user:response.data });
            localStorage.setItem("loggedinuser",true)
            console.log(this.state);

        }
        const error = (err) => {
            console.log(err);
          alert("invalid username or password")

        }
      

        axios.post("https://dummyjson.com/auth/login", body)
            .then(success)
            .catch(error)


    }


    render() {
        const loggedinuser = localStorage.getItem("loggedinuser")
        return (
            <div className='container'>
                {loggedinuser && (
                    <Navigate to="/counter" replace={true} />
                )}
                <form className='mt-5' style={{ width: "40rem" }}>
                    <div className="mb-3 ">
                        <label for="email" className="form-label">Email address or User name</label>
                        {/* input for email */}
                        <input onChange={this.handleEmail} className="form-control" value={this.state.email} id="email" />
                    </div>
                    <div class="mb-3">
                        {/* input for password */}
                        <label for="password" className="form-label">Password</label>
                        <input onChange={this.handlePassword} type="password" value={this.state.password} className="form-control" id="password" />
                    </div>
                    {/* login */}
                    <button type="submit" onClick={this.handleLogin} className="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }
}

export default Login;