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
import { Td, TdText } from '../Jss/Components/Td'
import { ButtonDelete, ButtonEdit } from '../Jss/Components/Button'
import { handleDelete, handleEdit } from '../Redux/Actions/mainActions'

class TableDanhSachNguoiDung extends Component {
  renderListUser = () => {
    return this.props.handle.listUser.map((object,index) => {
      return  <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{object.account}</Td>
                <TdText>{object.name}</TdText>
                <Td>{object.password}</Td>
                <Td>{object.email}</Td>
                <Td>{object.phone}</Td>
                <TdText>{object.type}</TdText>
                <Td>
                  <DivButton>
                    <ButtonEdit type="button" onClick={() => {this.props.handleEdit(object.id)}}>chỉnh sữa</ButtonEdit>
                    <ButtonDelete type="button" onClick={() => {this.props.handleDelete(object.id);}}>xoá</ButtonDelete>
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
    handleDelete : (id) => {
      dispatch(handleDelete(id));
    },
    handleEdit : (id) => {
      dispatch(handleEdit(id));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TableDanhSachNguoiDung);