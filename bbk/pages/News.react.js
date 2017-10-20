import React, { Component } from 'react';
//import Header from '../components/Header.react';
import Banner from '../components/Banner.react';
import Footer from '../components/Footer.react';

class News extends Component {
  render() {
    return (
      <div>     
      <Banner />      
      <section className="section">
      <div className="container">
      <h1 className="title">NEWS</h1>
      <h2 className="subtitle">
      NEWS
      </h2>
      </div>
      </section>
      <Footer />
      </div>
    );
  }
}

export default News;
