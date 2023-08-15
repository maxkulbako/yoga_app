import { Fragment } from 'react';
import { SocialMediaSvg } from '../components/SocialMedia';
import { BaseButton } from '../components/Buttons/BaseButton';
import { ModalContext } from '../components/Modal/ModalContext';
import { useContext } from 'react';

import './contacts.scss';

const iconsData = [
  { id: 'instagram', href: 'https://www.instagram.com/nana.chaannel/' },
  { id: 'youtube', href: 'https://youtube.com/@yogawithnana' },
  { id: 'telegram', href: 'https://t.me/nanayoga' },
  { id: 'mail', href: 'mailto: nanayoga.manager@gmail.com' },
];

export function Contacts({ data = iconsData }) {
  const { setActiveContant } = useContext(ModalContext);

  return (
    <div className="contacts_page_container">
      <div className="contacts_wrapper">
        {data.map(({ id, href }) => (
          <Fragment key={id}>
            <a href={href} target="_blank">
              <ContactButton id={id} />
            </a>
            <div className="contacts_separator" />
          </Fragment>
        ))}
      </div>
      <BaseButton
        onClick={() => setActiveContant('cooperation')}
        title="для сотрудничества и предложений"
      />
    </div>
  );
}

function ContactButton({ id }) {
  return (
    <div className="contact_button_wraper">
      <SocialMediaSvg id={id} />
      <p className="contact_button_title">{id}</p>
    </div>
  );
}
