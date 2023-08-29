import { coursesMenuList } from '../../../core/constants/storage';
import { MenuButton } from '../components/MenuButton';

export function CoursesList({ ContentMenuList = coursesMenuList }) {
  return (
    <div>
      {ContentMenuList.map(
        ({ title, background, link, isDisabled = false }) => (
          <MenuButton
            key={title}
            title={title}
            link={link}
            background={background}
            isDisabled={isDisabled}
          />
        )
      )}
    </div>
  );
}
