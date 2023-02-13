import { Button } from "../RightSide";
const MenuList = [
  {title: "погружение", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676284882/nana_yoga/course/img/%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_qf3uce.jpg"},
  {title: "эффективное утро", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676284882/nana_yoga/course/img/%D1%83%D1%82%D1%80%D0%BE_uselcs.jpg"},
  {title: "женская йога в особенные дни", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676284882/nana_yoga/course/img/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B8%CC%86%D0%BE%D0%B3%D0%B0_ovooog.jpg"},
  {title: "инь-йога", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676284890/nana_yoga/course/img/%D0%B8%D0%BD%D1%8C_dkokyf.png"},
  {title: "14 дней практики каждый день", background: "https://res.cloudinary.com/dd69ztxsd/image/upload/v1676284881/nana_yoga/course/img/14_%D0%B4%D0%BD%D0%B5%D0%B8%CC%86_vrwn7d.jpg"}
]

export function Course ({ ContentMenuList = MenuList }) {
  return (
    <div>
    { ContentMenuList.map(({title, background}, index) => (
      <Button key={index} title={title} background={background}></Button>
    ))
    }
    </div>
  );
}