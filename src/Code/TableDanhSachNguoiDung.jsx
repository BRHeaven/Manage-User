import React, { Component } from 'react'
import { Section } from '../Jss/Components/Section'
import { Div, DivButton } from '../Jss/Components/Div'
import { Title } from '../Jss/Components/Text'
import { Table } from '../Jss/Components/Table'
import { Thead } from '../Jss/Components/Thead'
import { Tr } from '../Jss/Components/Tr'
import { Th } from '../Jss/Components/Th'
import { Tbody } from '../Jss/Components/Tbody'
import { connect } from 'react-redux'
import { Td } from '../Jss/Components/Td'
import { ButtonDelete, ButtonEdit } from '../Jss/Components/Button'

class TableDanhSachNguoiDung extends Component {
  renderListUser = () => {
    return this.props.handle.user.map((object,index) => {
      return  <Tr key={index}>
                <Td>{object.id}</Td>
                <Td>{object.account}</Td>
                <Td>{object.name}</Td>
                <Td>{object.password}</Td>
                <Td>{object.email}</Td>
                <Td>{object.phone}</Td>
                <Td>{object.type}</Td>
                <Td>
                  <DivButton>
                    <ButtonEdit>chỉnh sữa</ButtonEdit>
                    <ButtonDelete>xoá</ButtonDelete>
                  </DivButton>
                </Td>
              </Tr>
    });
  };
  render() {
    return (
      <Section>
        <Div>
          <Title>danh sách người dùng</Title>
        </Div>
        <Table>
          <Thead>
            <Tr>
              <Th>STT</Th>
              <Th>tài khoản</Th>
              <Th>họ tên</Th>
              <Th>mật khẩu</Th>
              <Th>email</Th>
              <Th>số điện thoại</Th>
              <Th>loại người dùng</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.renderListUser()}
          </Tbody>
        </Table>
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

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TableDanhSachNguoiDung);