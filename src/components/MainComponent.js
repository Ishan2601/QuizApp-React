import React, { Component } from 'react';
import Home from './HomeComponent';
import Test from './TestComponent';
import ShowTest from './ShowTestComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom'
import { TESTS } from '../shared/tests';
import { QUESTIONS } from '../shared/questions';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tests : TESTS,
      questions: QUESTIONS
    }
  }

  render() {

    const HomePage = () => {
      return(
          <Home />
      );
    }

    const TestWithId = ({match}) => {
      return(
        <ShowTest test={this.state.tests.filter((test) => test.id === parseInt(match.params.testId,10))[0]}
          questions={this.state.questions.filter((question) => question.testId === parseInt(match.params.testId,10))}
        />
      );
    };

    return (
      <div>
        <Header />
            <Switch location={this.props.location}>
                <Route path='/home' component={HomePage} />
                <Route exact path='/test' component = {() => <Test tests = {this.state.tests}/>}/>
                <Route path='/test/:testId' component={TestWithId} />
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
