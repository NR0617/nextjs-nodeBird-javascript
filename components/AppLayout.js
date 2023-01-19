//일부 페이지만 공통
import {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div>
    <Menu mode="horizontal">
      <Menu.Item>
      <Link href='/signup'>회원가입</Link>
      </Menu.Item>
      <Menu.Item>
      <Link href='/profile'>프로필</Link>
      </Menu.Item>
      <SearchInput enterButton="Search" />
      <Menu.Item>
      <Link href='/'>홈</Link>
      </Menu.Item>
   </Menu>
   <Row gutter={8}>
    <Col xs={24} md={6}>{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}</Col>
    <Col xs={24} md={12}>
      <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">제로초</a>
    </Col>
    <Col xs={24} md={6}>{children}</Col>
   </Row>
   
  </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;