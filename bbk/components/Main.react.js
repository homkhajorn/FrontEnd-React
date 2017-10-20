import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home.react'
import About from '../pages/About.react'
import ServiceProduct from '../pages/ServiceProduct.react'
import News from '../pages/News.react'
import Contact from '../pages/Contact.react'


class Main extends Component {
  render() {
    return (
     
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About'  component={About}/>
      <Route path='/ServiceProduct' component={ServiceProduct}/>
      <Route path='/News' component={News}/>
      <Route path='/Contact' component={Contact}/>

      </Switch>
   
    );
  }
}

export default Main
