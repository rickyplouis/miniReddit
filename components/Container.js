import React from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';

const { Content } = Layout;

const Container = ({ children }) => (
  <Layout>
    <Navbar />
    <Content style={{ padding: '50px 50px', textAlign: 'center' }}>{children}</Content>
  </Layout>
);

export default Container;
