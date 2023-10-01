import React, { Component } from 'react';
class LogIn extends Component {
    state = {
        email:" ",
        password:"",

    }
    handleEmail = (event) =>{
        console.log("email:" , event.target.value);
        const updateEmail =  event.target.value;

        this.setState({...this.state, email: updateEmail})


    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        const{email, password} = this.state;
        if(email === "shahriarrijon@gmail.com" && password === "rijon1969"){
            window.open("https://www.youtube.com/watch?v=Oidw9SjIYQs&t=2167s")
        }
        else{
            alert("invalid")
        }


    }
    handlePassword = (event) =>{
        console.log("password:" , event.target.value );
        const updatePasword = event.target.value;

        this.setState({...this.state , password : updatePasword})

    }
    render() {
        return (
            <>
                <form className='container mt-5' style={{ width: "500px", padding: "50px" }}>
                    <div className="mb-3 " >
                        <label for="email" className="form-label">Email address</label>
                        {/* this input for email */}
                        <input onChange={this.handleEmail} type="email" value={this.state.email} className="form-control" id="email"  />
                        
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        {/* this input for password */}
                        <input onChange={this.handlePassword} type="password" value={this.state.password} className="form-control" id="password" />
                    </div>
                    
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>

        );
    }
}

export default LogIn;