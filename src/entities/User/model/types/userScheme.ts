export interface User {
    id: string;
    username: string;
}

export interface UserScheme {
    authData?: User;

    _initiated: boolean;
}
