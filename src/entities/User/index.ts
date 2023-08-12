export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export {
    User,
    UserScheme,
} from './model/types/userScheme';

export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserInitiated,
} from './model/selectors/getUserInitiated/getUserInitiated';
