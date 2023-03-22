import React, { useCallback } from "react";
//import PropTypes from "prop-types";
import { Avatar, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {me.Posts.length}
                </div>,
                <div key="folowing">
                    팔로잉
                    <br />
                    {me.Followings.length}
                </div>,
                <div key="folower">
                    팔로워
                    <br />
                    {me.Followers.length}
                </div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>
                로그아웃
            </Button>
        </Card>
    );
};
// UserProfile.propTypes = {
//     setIsLoggedIn: PropTypes.elementType.isRequired,
// };
export default UserProfile;
