export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type FormEventParam = {
    preventDefault: () => void;
    currentTarget: HTMLFormElement;
}

export type Login = {
    email: string
    password: string
}

export type LoginResponse = {
    token: string
}

export type UserProfile = {
    firstName: string
    lastName: string
}