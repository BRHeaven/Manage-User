import React, { Component } from 'react';
import FormDangKy from './FormDangKy';
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung';
import { DarkLight } from '../Jss/Themes/DarkLight';
import { ThemeProvider } from 'styled-components';

export default class QuanLyNguoiDung extends Component {
  render() {
    return (
      <ThemeProvider theme={DarkLight}>
        <FormDangKy/>
        <TableDanhSachNguoiDung/>
      </ThemeProvider>
    )
  }
};
