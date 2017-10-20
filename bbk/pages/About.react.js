import React, { Component } from 'react'
import DocumentMeta from 'react-document-meta'
import Banner from '../components/Banner.react'
import Footer from '../components/Footer.react'
import Title from '../components/widgets/Title/Title'
import Subtitle from '../components/widgets/Title/Subtitle'
import Section from '../components/widgets/Section/Section'
import Container from '../components/widgets/Container/Container'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
                   AboutDetail: [],
                    DocMeta:[]
                 };
   }


   componentDidMount() {    
    var that =this;
    var url = 'https://www.hawkeyeit.com/api/demo/v1/about.php'
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
  
    return response.json();
  
    })
    .then(function(data) { 
  
   //   console.log(data.meta);
      that.setState({ AboutDetail: data.AboutDetail,
                    DocMeta:data.DocumentMeta
                   });
           
    });
  }



  render() {
    return (
      <div>   
      <DocumentMeta {...this.state.DocMeta} />  
       <Banner/>
      <Section>
      <Container>

      <Title is='3'>เกี่ยวกับเรา</Title> 
      <Subtitle is='4'>เกี่ยวกับออกแกนิค สุรินทร์</Subtitle> 
      
      </Container>
       </Section>
      <Footer />
      </div>
    );
  }
}

export default About;
