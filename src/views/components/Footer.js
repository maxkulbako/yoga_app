import { SocialMediaSvg } from './SocialMedia';

export function Footer () {
  return (
    <footer className="footer_wrapper">
      <div className="footer_web">nana.yoga.com</div>
      <div className="footer_copyright">Copyright 2022 nana.yoha.com, All rights reserved. We use Cookies.</div>
      <div className="social_media_wrapper">
        <SocialMediaSvg id="mail" />
        <SocialMediaSvg id="instagram" />
        <SocialMediaSvg id="youtube" />
      </div>
      <div className="footer_terms_privacy">
        <ul>
          <a href="#234">Terms & Conditions</a>
          <a href="#234">Privacy Policy</a>
          <a href="#234">Cookies Policy</a>
          <a href="#234">Security</a>
        </ul>
      </div>
    </footer>
  );
}
