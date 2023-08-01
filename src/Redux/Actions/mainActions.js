import { HANDLE_DELETE, HANDLE_REGISTER, HANDLE_UPDATE } from "../Types/mainTypes";

export const handleRegister = (account,password,name,email,phone,typeUser) => {
    return {
        type: HANDLE_REGISTER,
        account,password,name,email,phone,typeUser
    };
};
export const handleDelete = (account) => {
    return {
        type : HANDLE_DELETE,
        account
    }
};
export const handleUpdate = (account,password,name,email,phone,typeUser) => {
    return {
        type: HANDLE_UPDATE,
        account,password,name,email,phone,typeUser
    };
};