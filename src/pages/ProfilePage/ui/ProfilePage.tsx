import React, { useEffect } from 'react';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

    return (
        <div>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </div>
    );
};

export default ProfilePage;
