import React from 'react';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const Navbar = () => (
  <Header>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', width: '100vw' }}>
      <Menu.Item>Home</Menu.Item>
    </Menu>
  </Header>
);

export default Navbar;
