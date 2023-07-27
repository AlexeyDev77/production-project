import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = ({ item, collapsed } : SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.INVERTED_PRIMARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};
