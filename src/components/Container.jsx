import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'

export default class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: null,
            email: null,
            isSubmitted: false,
            questions : {
                q1: null,
            }
             
        }
    }
    detailsSubmitHnadler = (event) =>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email});
        event.preventDefault(); 
    }
    questionsSubmitHnadler = (event) =>{
        const questions = {};
        questions.q1 = event.target.q1.value;
        this.setState({ questions },()=>{
            console.log(this.state)
        });
        event.preventDefault(); 
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="container card mt-2">
                        <h1 className="text-center text-primary">Online Survey</h1>

                    </div>

                </div>
                {
                    this.state.name === null && this.state.email === null ? (<Details submit={this.detailsSubmitHnadler}/>) : (<Question submit={this.questionsSubmitHnadler} />)
                }
                
                
                
            </div>
        )
    }
}
