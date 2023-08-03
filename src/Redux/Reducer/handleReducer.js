/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import { HANDLE_DELETE, HANDLE_EDIT, HANDLE_REGISTER, HANDLE_UPDATE } from "../Types/mainTypes";

const stateHandle = {
    listUser : [
        
    ],
    editUser : {id:"-1",name:"",account:"",password:"",email:"",phone:"",type:""},
    flag : true,
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
            let newUser = {id:Date.now(),name:action.name,account:action.account,password:action.password,email:action.email,phone:action.phone,type:action.typeUser};
            updateState.push(newUser);
            state.listUser = updateState;
            return {...state};
        }; break;
        case HANDLE_DELETE : {
            let updateState = state.listUser;
            let index = updateState.findIndex(object => object.id === action.id);
            if ( index !== -1 ) {
                updateState.splice(index,1);
            };
            state.listUser = updateState;
            return {...state};
        }; break;
        case HANDLE_EDIT : {
            let updateState = state; 
            let index = updateState.listUser.findIndex(object => object.id === action.id);
            if ( index !== -1 ) {
                updateState.editUser.id = updateState.listUser[index].id;
                updateState.editUser.account = updateState.listUser[index].account;
                updateState.editUser.name = updateState.listUser[index].name;
                updateState.editUser.password = updateState.listUser[index].password;
                updateState.editUser.email = updateState.listUser[index].email;
                updateState.editUser.phone = updateState.listUser[index].phone;
                updateState.editUser.type = updateState.listUser[index].type;
                updateState.flag = false;
            };
            state = updateState;
            return {...state};
        }; break;
        case HANDLE_UPDATE : {
            let updateState = state;
            let index = updateState.listUser.findIndex(object => object.id === action.user.id);
            if( index !== -1 ) {
                updateState.listUser[index] = action.user;
                updateState.listUser[index].type = action.user.typeUser;
                updateState.flag = true;
            };
            return {...state};
        }
        default: ; break;
    };
    return {...state};
};
export default handleReducer;