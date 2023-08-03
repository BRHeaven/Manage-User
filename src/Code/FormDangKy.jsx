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
  state = {id:"",account:"",name:"",password:"",email:"",phone:"",type:"",editUser:"",flag: true};
  render() {
    const renderInputAccount = () => {  
      if (this.state.flag) {
        return (
          <Div>
            <Label forId={"account"}>tài khoản</Label>
            <Input id="account" name="account" onChange={(i) => {this.setState({account : i.target.value});}} value={this.state.account}/>
          </Div>
        );
      };
      return (
        <Div>
          <Label forId={"account"}>tài khoản</Label>
          <Input id="account" name="account" onChange={(i) => {this.setState({account : i.target.value});}} value={this.state.account} disabled/>
        </Div>
      );
    };
    const renderSelectUser = () => {
      if (this.state.flag) {
        return (
          <Div>
            <Label forId={"code"}>mã loại người dùng</Label>
            <Select id="code" name="code" onChange={(i) => {this.setState({type : i.target.value});}}>
              <Option value={"khách hàng"} >khách hàng</Option>
              <Option value={"doanh nghiệp"} >doanh nghiệp</Option>
            </Select>
          </Div>
          );
      };
      return (
        <Div>
          <Label forId={"code"}>mã loại người dùng</Label>
          <Select id="code" name="code" onChange={(i) => {this.setState({type : i.target.value});}} disabled>
            <Option value={"khách hàng"} >khách hàng</Option>
            <Option value={"doanh nghiệp"} >doanh nghiệp</Option>
          </Select>
        </Div>
      );
    };
    const renderButtonRegister = () => {
      if (this.state.flag) {
        return <ButtonRegister type="button" onClick={() => {this.props.handleResgister(this.state.account,this.state.password,this.state.name,this.state.email,this.state.phone,this.state.type);}}>Đăng Ký</ButtonRegister>;
      };
      return <ButtonRegister type="button" onClick={() => {this.props.handleResgister(this.state.account,this.state.password,this.state.name,this.state.email,this.state.phone,this.state.type);}} disabled>Đăng Ký</ButtonRegister>;
    };
    const renderButtonUpdate = () => {
      if(!this.state.flag) {
        return <ButtonUpdate type="button" onClick={() => {this.props.handleUpdate(this.state.id,this.state.account,this.state.password,this.state.name,this.state.email,this.state.phone,this.state.type);}}>Cập Nhật</ButtonUpdate>;
      }
      return <ButtonUpdate type="button" onClick={() => {this.props.handleUpdate(this.state.id,this.state.account,this.state.password,this.state.name,this.state.email,this.state.phone,this.state.type);}} disabled>Cập Nhật</ButtonUpdate>;
    };
    return (
      <Section>
        <Div>
          <Title>form đăng ký</Title>
        </Div>
        <FormUser>
          <Div>
            {renderInputAccount()}
            <Div>
              <Label forId={"password"}>mặt khẩu</Label>
              <Input id="password" name="password" type="password" onChange={(i) => {this.setState({password : i.target.value});}} value={this.state.password}/>
            </Div>
            <Div>
              <Label forId={"email"}>email</Label>
              <Input id="email" name="email" onChange={(i) => {this.setState({email : i.target.value});}} value={this.state.email}/>
            </Div>
          </Div>
          <Div>
            <Div>
              <Label forId={"name"}>họ tên</Label>
              <Input id="name" name="name" onChange={(i) => {this.setState({name : i.target.value});}} value={this.state.name}/>
            </Div>
            <Div>
              <Label forId={"phone"}>số điện thoại</Label>
              <Input id="phone"name="phone" onChange={(i) => {this.setState({phone : i.target.value});}} value={this.state.phone}/>
            </Div>
            {renderSelectUser()}
          </Div>
          <DivButton>
            {renderButtonRegister()}
            {renderButtonUpdate()}
          </DivButton>
        </FormUser>
      </Section>
    )
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.handle.editUser.id !== this.state.id) {
      this.setState({id : this.props.handle.editUser.id});
      this.setState({account : this.props.handle.editUser.account});
      this.setState({name : this.props.handle.editUser.name});
      this.setState({password : this.props.handle.editUser.password});
      this.setState({email : this.props.handle.editUser.email});
      this.setState({phone : this.props.handle.editUser.phone});
      this.setState({type : this.props.handle.editUser.type});
      this.setState({flag : this.props.handle.flag})
    };
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
    handleUpdate : (id,account,password,name,email,phone,type) => {
      dispatch(handleUpdate(id,account,password,name,email,phone,type));
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FormDangKy);