import { HANDLE_DELETE, HANDLE_EDIT, HANDLE_REGISTER, HANDLE_UPDATE } from "../Types/mainTypes";

export const handleRegister = (account,password,name,email,phone,typeUser) => {
    return {
        type: HANDLE_REGISTER,
        account,password,name,email,phone,typeUser
    };
};
export const handleDelete = (id) => {
    return {
        type : HANDLE_DELETE,
        id
    }
};
export const handleEdit = (id) => {
    return {
        type : HANDLE_EDIT,
        id
    };
};
export const handleUpdate = (id,account,password,name,email,phone,typeUser) => {
    return {
        type: HANDLE_UPDATE,
        user: {id,account,password,name,email,phone,typeUser},
    };
};