import React, { Component } from 'react';
import { Section } from '../Jss/Components/Section';
import { Div, DivButton } from '../Jss/Components/Div';
import { Title } from '../Jss/Components/Text';
import { FormUser } from '../Jss/Components/Form';
import { Input } from '../Jss/Components/Input';
import { Label } from '../Jss/Components/Label';
import { Select } from '../Jss/Components/Select';
import { Option } from '../Jss/Components/Option';
import { ButtonRegister, ButtonUpdate } from '../Jss/Components/Button';
import { connect } from 'react-redux';
import { handleRegister, handleUpdate } from '../Redux/Actions/mainActions';

class FormDangKy extends Component {
  state = {account:"",name:"",password:"",email:"",phone:"",type:""};
  render() {
    return (
      <Section>
        <Div>
          <Title>form đăng ký</Title>
        </Div>
        <FormUser>
          <Div>
            <Div>
              <Label forId={"account"}>tài khoản</Label>
              <Input id="account" name="account" onChange={(i) => {this.setState({account : i.target.value});}}/>
            </Div>
            <Div>
              <Label forId={"password"}>mặt khẩu</Label>
              <Input id="password" name="password" type="password" onChange={(i) => {this.setState({password : i.target.value});}}/>
            </Div>
            <Div>
              <Label forId={"email"}>email</Label>
              <Input id="email" name="email" onChange={(i) => {this.setState({email : i.target.value});}}/>
            </Div>
          </Div>
          <Div>
            <Div>
              <Label forId={"name"}>họ tên</Label>
              <Input id="name" name="name" onChange={(i) => {this.setState({name : i.target.value});}}/>
            </Div>
            <Div>
              <Label forId={"phone"}>số điện thoại</Label>
              <Input id="phone"name="phone" onChange={(i) => {this.setState({phone : i.target.value});}}/>
            </Div>
            <Div>
              <Label forId={"code"}>mã loại người dùng</Label>
              <Select id="code" name="code" onChange={(i) => {this.setState({type : i.target.value});}}>
                <Option value={"khách hàng"} >khách hàng</Option>
                <Option value={"doanh nghiệp"} >doanh nghiệp</Option>
              </Select>
            </Div>
          </Div>
          <DivButton>
            <ButtonRegister type="button" onClick={() => {this.props.handleResgister(this.state.account,this.state.password,this.state.name,this.state.email,this.state.phone,this.state.type);}}>Đăng Ký</ButtonRegister>
            <ButtonUpdate type="button">Cập Nhật</ButtonUpdate>
          </DivButton>
        </FormUser>
      </Section>
    )
  };
};
const mapStateToProps = state => {
  return {
    handle : state.handleReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleResgister : (account,password,name,email,phone,type) => {
      dispatch(handleRegister(account,password,name,email,phone,type));
    },
    handleUpdate : (account,password,name,email,phone,type) => {
      dispatch(handleUpdate(account,password,name,email,phone,type));
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FormDangKy);