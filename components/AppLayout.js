//일부 페이지만 공통
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => {
  return (<div>
    <Menu mode="horizontal">
      <Menu.Item>
      <Link href='/signup'>회원가입</Link>
      </Menu.Item>
      <Menu.Item>
      <Link href='/profile'>프로필</Link>
      </Menu.Item>
      <Menu.Item>
      <Link href='/'>홈</Link>
      </Menu.Item>
   </Menu>
    {children}
  </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;