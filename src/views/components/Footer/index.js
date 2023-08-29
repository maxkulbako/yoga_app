import './_footer.scss';
import { SocialMediaSvg } from '../SocialMedia';
import { useContext } from 'react';
import { ModalContext } from '../../components/Modal/ModalContext';

const iconsData = [
  { id: 'instagram', href: 'https://www.instagram.com/nana.chaannel' },
  { id: 'youtube', href: 'https://youtube.com/@yogawithnana' },
  { id: 'mail', href: 'mailto: nanayoga.manager@gmail.com' },
];

export function Footer({ data = iconsData }) {
  const { setActiveContant } = useContext(ModalContext);

  return (
    <footer className="footer_wrapper">
      <div className="footer_web">nana-yoga.com</div>
      <div className="footer_copyright">
        Copyright 2022 nana-yoga.com, All rights reserved. We use Cookies.
      </div>
      <div className="social_media_wrapper">
        {data.map(({ id, href }) => (
          <a key={id} href={href} target="_blank">
            <SocialMediaSvg id={id} />
          </a>
        ))}
      </div>
      <div className="footer_terms_privacy">
        <ul>
          <a href="#234" onClick={() => setActiveContant('termsConditions')}>
            Terms & Conditions
          </a>
          <a onClick={() => setActiveContant('privacyPolicy')} href="#234">
            Privacy Policy
          </a>
          <a onClick={() => setActiveContant('cookieFiles')} href="#234">
            Cookies Policy
          </a>
        </ul>
      </div>
    </footer>
  );
}
