import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

    return (
        <div>
            {t('Страница профиля')}
        </div>
    );
};

export default ProfilePage;
