import { Fragment } from 'react';
import { SocialMediaSvg } from '../components/SocialMedia';
import { BaseButton } from '../components/Buttons/BaseButton';

export function Contacts() {
  const icons = ['instagram', 'youtube', 'telegram', 'mail'];

  return (
    <div className="contacts_page_container">
      <div className="contacts_wrapper">
        {
          icons.map((id) => (
            <Fragment key={id}>
              <a href>
                <ContactButton id={id} />
              </a>
              <div className="contacts_separator" />
            </Fragment>
          ))
        }
      </div>
      <BaseButton title="для сотрудничества и предложений" />
    </div>
  );
}

function ContactButton({ id }) {
  return (
    <div className="contact_button_wraper">
      <SocialMediaSvg id={id} />
      <p className="contact_button_title">
        {id}
      </p>
    </div>
  );
}
