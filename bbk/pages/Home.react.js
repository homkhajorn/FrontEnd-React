import React, { Component } from 'react';
//import Header from '../components/Header.react';
import Banner from '../components/Banner.react';
//import Team from '../components/Team.react'
// <Team />
import Footer from '../components/Footer.react'
import { Link } from 'react-router-dom'
import DocumentMeta from 'react-document-meta'
//import TableWidgets from '../components/widgets/TableWidgets'

import Title from '../components/widgets/Title/Title'
import Subtitle from '../components/widgets/Title/Subtitle'
import Content from '../components/widgets/Content/Content'
import Section from '../components/widgets/Section/Section'
import Container from '../components/widgets/Container/Container'

//url API get JSON
//import homeJson from '../api/home.json'
//import {Title,Subtitle,Content} from '../components/main.widgets'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { DocMeta:[],
                   Title: '',
                   Subtitle: '',
                   Content1: ''
                 };
   }



componentDidMount() {    
  var that =this;
  var url = 'https://www.hawkeyeit.com/api/demo/v1/home.php'
  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

  return response.json();

  })
  .then(function(data) { 

 //   console.log(data.meta); load data to stage
    that.setState({ Title: data.titleH1,
                   Subtitle: data.subtitle,
                   Content1: data.content1,
                  DocMeta:data.documentMeta
                 });
         
  });



}


  render() {

    // with select from array 

    return (
      <div>
      <DocumentMeta {...this.state.DocMeta} />
      

       <Banner />  
       <Section >
      <Container>
      <Title is='3'>{this.state.Title}</Title> 
      <Subtitle is='4'>{this.state.Subtitle}</Subtitle> 
      <Content html={this.state.Content1} />
      </Container>
      </Section>

      <Section >
      <Container>
     <h2 className="title is-2">Team </h2>
     <hr />    
     </Container>
     </Section>


      
      <Footer />
      </div>
    );
  }
}

export default Home;




    /*
    const FullRoster = () => (
      <div>
        <ul>
          {
            PlayerAPI.all().map(p => (
              <li key={p.number}>
                <Link to={`/roster/${p.number}`}>{p.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )

        <p><FullRoster /></p>
{
        this.state.items.map(items => <div>{items.number} </div>)
     }

    */
    