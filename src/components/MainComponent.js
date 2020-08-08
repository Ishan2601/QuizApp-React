import React, { Component } from 'react';
import Home from './HomeComponent';
import Test from './TestComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom'
import { TESTS } from '../shared/tests';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tests : TESTS
    }
  }

  render() {

    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div>
        <Header />
            <Switch location={this.props.location}>
                <Route path='/home' component={HomePage} />
                <Route exact path='/test' component = {() => <Test tests = {this.state.tests}/>}/>
                <Redirect to="/home" />
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
