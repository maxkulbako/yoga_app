export function TitleBlock ({title}) {
  const isActive = title && title !== 'о нане' && title !== 'йога';

  return (

    <div>
      { isActive &&
        <div className="title_block_wrapper">
          <div className="title_text_top">
            {title !== 'контакты' ? `${title} с Наной` : title}
          </div>
          <div className="title_separator"></div>
        </div>
      }
    </div>

  );
}
