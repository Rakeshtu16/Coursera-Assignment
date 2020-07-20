import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="pt-4 my-md-5 pt-md-5 border-top container">
        <div className="row">
          <div className="col-4 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><Link to="/home" className="text-muted">Home</Link></li>
              <li><Link to="/aboutus" className="text-muted">About Us</Link></li>
              <li><Link to="/menu" className="text-muted">Menu</Link></li>
              <li><Link to="/contactus" className="text-muted">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/">Resource</a></li>
            </ul>
          </div>
          <div className="col-4 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="/">Team</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer;