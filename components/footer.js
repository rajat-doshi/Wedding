import React from "react";
export default function Footer() {
  return (
    <>
      {" "}
      <footer class="container-footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="footer-about-us">
                <h6 class="about-us-title">About Us</h6>
                <p class="about-us-desc">
                  Established in 2017. We’re one of the leading job boards in
                  europe. Our job board is featured on popular europian
                  magazines.
                </p>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="footer-contact-info">
                <div class="contact-info">
                  <span class="icon icon-pin"></span>
                  <span class="contact-info-text">
                    4127 Raoul Wallenber4127 Raoul Wallen berg Place
                  </span>
                </div>
                <div class="contact-info">
                  <span class="icon icon-old-handphone"></span>
                  <span class="contact-info-text">201-808-8888</span>
                </div>
                <div class="contact-info">
                  <span class="icon icon-at"></span>
                  <span class="contact-info-text">info@jobboarpsd.com</span>
                </div>
              </div>
            </div>

            <div class="col-6 col-lg-3">
              <ul class="footer-menu">
                <li>
                  <a href="home.html" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Services & Features
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-lg-2">
              <ul class="footer-menu">
                <li>
                  <a href="#" title="">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Read Our Blog
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Our Office
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Join us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-line"></div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <ul class="footer-social-media">
                <li>
                  <a href="#" title="">
                    <span class="icon icon-facebook-logo"></span>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <span class="icon icon-twitter-logo"></span>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <span class="icon icon-pinterest-logo"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6">
              <p class="footer-copyright">
                Copyright 2018 <span>Life Line</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
