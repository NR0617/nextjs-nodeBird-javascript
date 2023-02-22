import React from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import "antd/dist/antd.css";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.user); // isLoggedIn이 바뀌면 이 컴포넌트가 리렌더링된다
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a
                        href="https://velog.io/@nara20210617"
                        target={"_blank"}
                        rel="noreferrer noopener"
                    >
                        내 블로그
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default AppLayout;
