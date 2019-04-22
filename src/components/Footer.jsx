import React from 'react';
import '../scss/styles.scss';
import FooterLogos from '../assets/images/footer-logos.png';

function Footer() {
  return(
    <div className='footer'>
      <div className='links'>
        <div className='links-left'>
          <a href='https://www.wunderground.com/download'>Our Apps</a>
          <a href='https://www.wunderground.com/about/our-company'>About Us</a>
          <a href='https://www.wunderground.com/about/contact-us'>Contact</a>
          <a href='https://krb-sjobs.brassring.com/TGnewUI/Search/Home/HomeWithPreLoad?partnerid=26059&siteid=5016&PageType=searchResults&SearchType=linkquery&LinkID=363#keyWordSearch=&locationSearch='>Careers</a>
          <a href='https://www.wunderground.com/sitemap/index.asp'>Site Map</a>
        </div>
        <div className='links-middle'>
          <a href='https://www.wunderground.com/weatherstation/overview.asp'>PWS Network</a>
          <a href='https://www.wunderground.com/fullscreenweather'>Full Screen Weather</a>
          <a href='https://feedback.weather.com/?b_id=17298'>Feedback & Support</a>
          <a href='https://www.wunderground.com/privacy-settings'>Data Rights</a>
        </div>
        <div className='links-right'>
          <a href='https://www.wunderground.com/company/legal'>Terms of Use</a>
          <a href='https://www.wunderground.com/company/privacy-policy'>Privacy Policy</a>
          <a href='https://www.wunderground.com/company/ad-choices'>Ad Choices</a>
          <a href='https://www.wunderground.com/company/ad-partners'>Ad Partners</a>
          <a href='https://www.wunderground.com/company/analytics-partners'>Analytics Partners</a>
        </div>
      </div>
      <a id='cloudPower' href='https://www.ibm.com/cloud/'>Powered by the IBM Cloud</a>
      <img src={FooterLogos}></img>
      <p id='copyright'>© Copyright TWC Product and Technology LLC 2014, 2019</p>
    </div>

  );
}

export default Footer;
