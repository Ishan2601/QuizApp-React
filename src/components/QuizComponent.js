import React, {Component} from "react"; 
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import QuestionBox from './QuestionBox'; 
import Result from './ResultBox'; 
  
class Quiz extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      questionBank: this.props.questions, 
      score: 0, 
      responses: 0,
    }; 
  } 

  // Set state back to default and call function 
  playAgain = () => {
    this.setState({score: 0, responses: 0}); 
  };
  
  // Function to compute scores 
  computeAnswer = (answer, correctAns) => { 
    if (answer === correctAns) { 
      this.setState({ 
        score: this.state.score + 1 
      }); 
    } 
    this.setState({ 
      responses: this.state.responses < 5 
        ? this.state.responses + 1 
        : 5 
    }); 
  }; 
  render() { 
    return ( 
      <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/test">Tests</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.test.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{this.props.test.name}</h3>
                <hr />
            </div>                
        </div>
      {this.state.questionBank.length > 0 &&  
       this.state.responses < 5 &&  
       this.state.questionBank.map(({question, options, 
       answer, id}) => <QuestionBox question= 
       {question} options={options} key={id} 
       selected={response => this.computeAnswer(response, answer)}/>)}
      
      { 
        this.state.responses === 5
          ? (<Result score={this.state.score} 
            playAgain={this.playAgain}/>) 
          : null
      } 
  
    </div>) 
  } 
} 
export default Quiz;  