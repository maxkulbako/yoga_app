export function TitleBlock ({title}) {
  return (

    <div>
      { title &&
        <div className="title_block_wrapper">
          <div className="title_text_top">
            {`${title} с Наной`}
          </div>
          <div className="title_separator"></div>
        </div>
      }
    </div>

  );
}
