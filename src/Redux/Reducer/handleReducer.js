/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import { HANDLE_DELETE, HANDLE_REGISTER } from "../Types/mainTypes";

const stateHandle = {
    listUser : [],
};
const handleReducer = ( state = stateHandle, action ) => {
    switch ( action.type ) {
        case HANDLE_REGISTER : {
            let updateState = state.listUser;
            //Check Value
            if (action.account === "") {
                alert("không được để trống tài khoản");
                return {...state};
            };
            if (action.password === "") {
                alert("không được để trống mật khẩu");
                return {...state};
            };
            if (action.name === "") {
                alert("không được để trống họ tên");
                return {...state};
            };
            if (action.phone === "") {
                alert("không được để trống số điện thoại");
                return {...state};
            };
            if (action.email === "") {
                alert("không được để trống email");
                return {...state};
            };
            if (action.account === "") {
                alert("không được để trống ô tài khoản");
                return {...state};
            };
            if (action.account.search(" ") !== -1) {
                alert("tài khoản không được để khoảng trắng");
                return {...state};
            };
            if (action.password.search(" ") !== -1) {
                alert("mật khẩu để khoảng trắng");
                return {...state};
            };
            if (action.email.search(" ") !== -1) {
                alert("email không được để khoảng trắng");
                return {...state};
            };
            if (action.phone.search(" ") !== -1) {
                alert("số điện thoại không được để khoảng trắng");
                return {...state};
            };
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!regex.test(action.email)) {
                alert("địa chỉ email phải có đuôi @gmail.com");
                return {...state};
            };
            let indexOfAccount = updateState.findIndex(object => object.account === action.account);
            let indexOfEmail = updateState.findIndex(object => object.email === action.email);
            let indexOfPhone = updateState.findIndex(object => object.phone === action.phone);
            if (indexOfAccount !== -1) {
                alert("tài khoản này đã tồn tại !!!");
                return {...state};
            }
            if (indexOfEmail !== -1) {
                alert("email này đã tồn tại !!!");
                return {...state};
            }
            if (indexOfPhone !== -1) {
                alert("số điện thoại này đã tồn tại !!!");
                return {...state};
            }
            if (action.typeUser === "") {
                action.typeUser = "khách hàng";
            }
            let newUser = {name:action.name,account:action.account,password:action.password,email:action.email,phone:action.phone,type:action.typeUser};
            updateState.push(newUser);
            state.listUser = updateState;
            return {...state};
        }; break;
        case HANDLE_DELETE : {
            let updateState = state.listUser;
            let index = updateState.findIndex(object => object.account === action.account);
            if ( index !== -1 ) {
                updateState.splice(index,1);
            };
            state.listUser = updateState;
            return {...state};
        }; break;
        default: ; break;
    };
    return {...state};
};
export default handleReducer;