import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
class Counter extends Component {

    state = {
        counter: 0,
    }
    incrementCounter = () => {

        this.setState({ counter: this.state.counter + 1 });

    }

    dicrementCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        const loggedinuser = localStorage.getItem("loggedinuser")

        return (
            <>
                <div className='container'>
                    {!loggedinuser && (<Navigate to="/login" replace={true} />)}
                    <div className='card mt-3' style={{ width: "8rem" }}>
                        <div className='card-body'>
                            <button type="button" className="btn btn-sm btn-primary" onClick={this.incrementCounter}>+</button><span className="ms-2 me-2 badge bg-success">{this.state.counter}</span><button type="button" className="btn btn-sm btn-danger" onClick={this.dicrementCounter}>-</button>


                        </div>

                    </div>

                </div>


            </>

        );
    }
}

export default Counter;
