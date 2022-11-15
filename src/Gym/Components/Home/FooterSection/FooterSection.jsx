import React from 'react'
import { Link } from 'react-router-dom';
import '../FooterSection/FooterSection.css'
import gymimg from '../FooterSection/FooterImages/gymlogo.png'

const FooterSection = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="container">
            <div className="row footer-section-row">
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="right-text">
                            <h3>Address</h3>
                            <p>Bhagya Nagar</p>
                            <p>Work Shop Road, Nanded - 431605</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                        <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="right-text">
                            <h3>Mail Id</h3>
                            <p>MuscleFactory@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="address">
                        <div className="left-icon">
                        <i className="fa-solid fa-mobile-button"></i>
                        </div>
                        <div className="right-text">
                            <h3>Phone</h3>
                            <p>+91 9437040***, </p>
                            <p>+91 7873708***</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <h3 className="footer-title"><img src={gymimg} alt=''/><span className="footer-title-underline"></span></h3>
                    <ul className="quick-link-list">
                        <li><Link href=""> The Secretary</Link></li>
                        <li><Link href="#">  Shree Ramakrishna Dev</Link></li>
                        <li><Link href="#">  Maa Sarada Devi</Link></li>
                        <li><Link href="#"> Swami Vivekananda</Link></li>
                        <li><Link href="#"> Education</Link></li>
                        <li><Link href="#"> Medical</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Useful links</h3>
                    <ul className="quick-link-list">
                        <li><Link href="#"> About</Link></li>
                        <li><Link href="#"> Blog</Link></li>
                        <li><Link href="#"> Classes</Link></li>
                        <li><Link href="#"> Contanct</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3 className="footer-title title-transparent">Support</h3>
                    <ul className="quick-link-list">
                        <li><Link href="#"> Login</Link></li>
                        <li><Link href="#"> My account</Link></li>
                        <li><Link href="#"> Feedback</Link></li>
                        <li><Link href="#"> Subscribe</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p className="newsletter">Signup to Our Newsletter.</p>
                    <form action="" className="form-group">
                        <div >
                            <input type="text" className="form-control_form-control-new" id="usr" name="username" placeholder="Enter Your Mail Id"/>
                        </div>
                        <button type="submit" className="btn btn-primary subscribe">Subscribe</button>
                    </form>
                    <div id="social">
                        <Link className="facebookBtn smGlobalBtn" href="#"></Link>
                        <Link className="twitterBtn smGlobalBtn" href="#"></Link>
                        <Link className="youtubeBtn smGlobalBtn" href="#"></Link>
                        <Link className="linkedinBtn smGlobalBtn" href="#" ></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="footer-section-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-6 footer-bottom-left">
                    <p>© All Rights Reserved Shaikh Fais</p>
                </div>
                <div className="col-md-6 footer-bottom-right">
                    <p>Developed by <Link href="#">All India On-Line Pvt. Ltd.</Link></p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default FooterSection