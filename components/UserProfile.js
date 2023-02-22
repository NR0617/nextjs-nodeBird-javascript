import React, { useCallback } from "react";
//import PropTypes from "prop-types";
import { Avatar, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />0
                </div>,
                <div key="folowing">
                    팔로잉
                    <br />0
                </div>,
                <div key="folower">
                    팔로워
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>ZC</Avatar>} title="Zerocho" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};
// UserProfile.propTypes = {
//     setIsLoggedIn: PropTypes.elementType.isRequired,
// };
export default UserProfile;
