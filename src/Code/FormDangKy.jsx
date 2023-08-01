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

export default class FormDangKy extends Component {
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
              <Input id="account" name="account"/>
            </Div>
            <Div>
              <Label forId={"password"}>mặt khẩu</Label>
              <Input id="password" name="password"/>
            </Div>
            <Div>
              <Label forId={"email"}>email</Label>
              <Input id="email" name="email"/>
            </Div>
          </Div>
          <Div>
            <Div>
              <Label forId={"name"}>họ tên</Label>
              <Input id="name" name="name"/>
            </Div>
            <Div>
              <Label forId={"phone"}>số điện thoại</Label>
              <Input id="phone"name="phone"/>
            </Div>
            <Div>
              <Label forId={"code"}>mã loại người dùng</Label>
              <Select id="code" name="code">
                <Option value={1}>khách hàng</Option>
                <Option value={2}>doanh nghiệp</Option>
              </Select>
            </Div>
          </Div>
          <DivButton>
            <ButtonRegister>Đăng Ký</ButtonRegister>
            <ButtonUpdate>Cập Nhật</ButtonUpdate>
          </DivButton>
        </FormUser>
      </Section>
    )
  };
};