import React, { Component } from 'react'
import Banner from '../components/Banner.react'
import Footer from '../components/Footer.react'
import Title from '../components/widgets/Title/Title'
import Subtitle from '../components/widgets/Title/Subtitle'
import Section from '../components/widgets/Section/Section'
import Container from '../components/widgets/Container/Container'
import {createStore} from 'redux'




class Contact extends Component {

  /*
    constructor(props) {
    super(props);
    this.state = { result:15000,
                   values: [],
                   message: 'HELLO'
                 }

    //this.handleClick = this.handleClick.bind(this);
   }


*/

/*
  
   handleClick = () => {
    alert(this.state.message);
  }

*/








  render() {

 




   //   console.log("111 Store",this.state);

    return (



      
      <div>     
     

      {/*  <Banner />   */}  

      <Section>
      <Container>
       
      <Title is='3'>Contact</Title> 
      <Subtitle is='4'>ติอต่อเรา</Subtitle> 



      <button onClick={this.handleClick}>
        Say hello
      </button>


      </Container>
      </Section>
      <Footer />
      </div>
    );
  }
}




const initialState = { 
  result:20000,
  values: [999,888]
}


//console.log(initialState);

    
 // pure function 
//const state=initialState;
//console.log('1>',xx);


  const reducer=(state=initialState,action)=>{

 
 console.log(Date.now().toLocaleString('en-US', {hour12: false}),"--->>",state);
    
 
     
     switch (action.type) {
       case "ADD":
       
       state={
         result : state.result+=action.payload,
         values : [...state.values,action.payload]       
       }
       /*
       state={
        ...state
       }
       */
     
         break;
       case "SUB":
       state={
         ...state,
         result: state.result-=action.payload,
         values:[...state.values,action.payload]
             
          }
        
          break;
       default:
         break;
     }
   
    //console.log('2>',state);

     return state;
     
     }
  
   // input pure fucntion ,  value  
     const store=createStore(reducer,15000);
     
    
     store.subscribe(()=>{
       console.log("Update Store",store.getState());
     });
    
     store.dispatch({
       type:"ADD",
       payload:15000
     });
  
   
     store.dispatch({
       type:"ADD",
       payload:500
     });
  
     store.dispatch({
       type:"ADD",
       payload:10
     });
    

export default Contact;
