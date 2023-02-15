import { Link } from "react-router-dom";

const MenuList = [
  {title: "курсы", link: "course", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676280532/nana_yoga/menu_img/%D0%BA%D1%83%D1%80%D1%81%D1%8B_bk8r08.png"},
  {title: "онлайн-группа", link: "online", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676280601/nana_yoga/menu_img/%D0%BE%D0%BD%D0%BB%D0%B0%D0%B8%CC%86%D0%BD_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0_jeu639.png"},
  {title: "youtube", link: "youtube", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676280666/nana_yoga/menu_img/%D1%8E%D1%82%D1%83%D0%B1_vmvdog.jpg"},
  {title: "оффлайн-занятия", link: "offline", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676280712/nana_yoga/menu_img/%D0%BE%D1%84%D1%84%D0%BB%D0%B0%D0%B8%CC%86%D0%BD_m4tsbu.png"},
  {title: "индивидуальные занятия", link: "indv", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676280762/nana_yoga/menu_img/%D0%B8%D0%BD%D0%B4%D0%B2_uqqa8k.jpg"}
]

export function RightSide ({ ContentMenuList = MenuList }) {
  return (
    <div>
    { ContentMenuList.map(({title, background, link}, index) => (
      <Button link={link} key={index} title={title} background={background}></Button>
    ))
    }
    </div>
  );
}

export function Button ({ title, background, link }) {
  return (
    <div className="wrapper_content_menu_button">
      <Link to={`/yoga/${link}`} className="content_menu_button" style={{ backgroundImage: `url(${background})`}}>
      <p>
        {title}
        </p>
      </Link>
    </div>
  );
}