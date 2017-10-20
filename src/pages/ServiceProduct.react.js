import React, { Component } from 'react';
//import Header from '../components/Header.react';
import Banner from '../components/Banner.react';
import Footer from '../components/Footer.react';

class ServiceProduct extends Component {
  render() {
    return (
      <div>     
      <Banner />      
      <section className="section">
      <div className="container">
      <h1 className="title">ServiceProduct ServiceProduct</h1>
      <h2 className="subtitle">
      ServiceProduct
      </h2>
      </div>
      </section>
      <Footer />
      </div>
    );
  }
}

export default ServiceProduct;
