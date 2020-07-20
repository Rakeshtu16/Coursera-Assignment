import React, { Component } from 'react';
import Menu from './MenuComponents';
import Home from './HomeComponent';
import Header from './HeaderComonents';
import Footer from './FooterComponents';
import Contact from './ContactComponents';
// import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Route, Switch, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        />
      )
    }

    return(
      <div>
        <Header title="Coursera Assignment" />
        <div className="container">
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dish={this.state.dishes} />} />
              <Route path="/contactus" component={Contact} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main;
