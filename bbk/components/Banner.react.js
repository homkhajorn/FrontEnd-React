import React, { Component } from 'react';
import Slider from  'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends Component{

  constructor(props) {
    super(props);
    this.state = { banner:[]
                 };
   }


  componentDidMount() {    
    var that =this;
    var url = 'https://www.hawkeyeit.com/api/demo/v1/banner.php'
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
  
    return response.json();
  
    })
    .then(function(data) { 

  
  
     // console.log(data);
      that.setState({ banner: data
                   });
           
    });
  
  
  
  }
  




render(){

      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      
      let rows = [];
      let iterable = this.state.banner;
      for (const value of iterable) {
        rows.push(<div><img src={value.url} alt={value.alt} /></div>);
      }


    


    return (

     

      <div className='container is-fullhd'>
      <Slider {...settings}>
      {rows}
      </Slider>
    </div>
    
      /*
        <section className="hero is-primary">
           <div className="hero-body">
                <div className="container">
                   

          <div className="column">
          <p className="title">
           แจกเว็บไซต์สำหรับธุรกิจ
          </p>
          <br/>
          <p className="subtitle">
            Everything you need to <strong>Create a website</strong> for Business.
          </p>
        </div>

 <div className="columns is-mobile">
  <div className="column is-4 is-offset-8">ddd</div>
</div>


                </div>
           </div>
        </section>

        */
    );

}

}

export default Banner;