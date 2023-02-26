import { SocialMediaSvg } from '../components/SocialMedia';
import { BaseButton } from '../components';

export function Contacts () {
  const icons = ['instagram', 'youtube', 'telegram', 'mail'];

  return (
    <div className='contacts_page_container'>
      <div className='contacts_wrapper'>
        {
          icons.map((id, index) => ( 
            <>
              <a href>
                <ContactButton key={index} id={id} />
              </a>
              <div className='contacts_separator'></div>
            </>
          ))
        }
      </div>
      <BaseButton title="для сотрудничества и предложений" />
    </div>
  );
}

function ContactButton ({id}) {
  return (
    <div className='contact_button_wraper'>
      <SocialMediaSvg id={id}/>
      <p className='contact_button_title'>
        {id}
      </p>
    </div>
  );
}