const stateHandle = {
    user : [
        {id:'1',name:'Hà Thanh Triệu',account:'thanhtrieu',password:'12345678',email:'thanhtrieu2403@gmail.com',phone:'0907119554',type:'khách hàng'},
        {id:'2',name:'Nguyễn Lê Bảo Trọng',account:'henrynguyen',password:'01234567',email:'henrynguyen1009@gmail.com',phone:'0127563002',type:'khách hàng'}
    ]
};
const handleReducer = ( state = stateHandle, action ) => {
    switch ( action ) {
        case null : {}; break;
        default: ;
    };
    return {...state};
};
export default handleReducer;