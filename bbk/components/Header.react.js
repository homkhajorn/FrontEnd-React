import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './widgets/Nav/Nav'
import Button from './widgets/Button/Button'
import Control from './widgets/Control/Control'
import Field from './widgets/Field/Field'
import Icon from './widgets/Icon/Icon'

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
                   menu_mobile_status: 'is-active'
                 };
     //ผูกฟังก์ชั่น กับ state
  //  this.closeNavRight=this.closeNavRight.bind(this);
   }

//   closeNavRight(){
    
 //   this.setState({menu_mobile_status: ''});
        
 //     }

render(){

  const stylecss = {
    
    Colorgithub: {
      color: '#333'
    },
    Colortwitter: {
      color: '#55acee'
    },
  };




  
    return (
      
      <div className="container">
      <Nav>
      <div className="navbar-brand">
        <Nav.Item path_to={'/'}>
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
         

       </Nav.Item>

        <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
           <span className="icon" style={stylecss.Colorgithub} >
             <i className="fa fa-lg fa-github"></i>
           </span>
         </a>
       
         <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
           <span className="icon" style={stylecss.Colortwitter} >
             <i className="fa fa-lg fa-twitter"></i>
           </span>
         </a>



      </div>
      
    
      <Nav.Toggle className={'navbar-burger burger'} data-target={'navMenuTransparentExample'} />
      <Nav.Right menu id={'navMenuTransparentExample'}  >
        <Nav.Item path_to={'/'}  >
          หน้าแรก
        </Nav.Item>
        <Nav.Item  path_to={'/About'} >
        เกี่ยวกับเรา
        </Nav.Item>

        <Nav.Item  path_to={'/ServiceProduct'} >
        สินค้าและบริการ
        </Nav.Item>

        <Nav.Item  path_to={'/news'} >
        ข่าวสารและกิจกรรม
        </Nav.Item>

        <Nav.Item  path_to={'/contact'} >
        ติดต่อเรา
        </Nav.Item>


        <Nav.Item >
          <Icon>
            <i className="fa fa-github"/>
          </Icon>
        </Nav.Item>
        <Nav.Item >
          <Icon>
            <i className="fa fa-twitter"/>
          </Icon>
        </Nav.Item>

    
        <Nav.Item>
          <Field grouped>
            <Control>
              <Button>
                <Icon>
                  <i className="fa fa-twitter"/>
                </Icon>
                <span>Tweet</span>
              </Button>
            </Control>
            <Control>
              <Button primary>
                <Icon>
                  <i className="fa fa-download"/>
                </Icon>
                <span>Download</span>
              </Button>
            </Control>
          </Field>
        </Nav.Item>
      </Nav.Right>
   
    </Nav>
  

    </div>
    );
  }
}



///////////////


document.addEventListener('DOMContentLoaded', function () {

  
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
   // console.log($navbarBurgers.length);
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

       
  
        });
      });
    }
  
  });

//////////////////////////


export default Header;