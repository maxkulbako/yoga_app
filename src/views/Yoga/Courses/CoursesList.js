import { coursesMenuList } from '../../../core/constants/storage';
import { MenuButton } from '../components/MenuButton';

export function CoursesList({ ContentMenuList = coursesMenuList }) {
  return (
    <div>
      { ContentMenuList.map(({ title, background, link }) => (
        <MenuButton
          key={title}
          title={title}
          link={`course/${link}`}
          background={background}
        />
      ))}
    </div>
  );
}
