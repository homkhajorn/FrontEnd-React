import React, { Component } from 'react';


class Footer extends Component{

render(){

    return (
        
        <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
            <p>
                <strong>Bulma</strong> by <a href="http://jgthms.com">Sittipong</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                <i className="fa fa-github"></i>
                </a>
            </p>
            </div>
        </div>
        </footer>
    );

}

}

export default Footer;