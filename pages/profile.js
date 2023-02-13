import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const FollowingList = [
        { nickname: "제로초" },
        { nickname: "바로" },
        { nickname: "노드버드오피셜" },
    ];
    const FollowerList = [
        { nickname: "제로초" },
        { nickname: "바보" },
        { nickname: "노드버드오피셜" },
    ];

    return (
        <>
            <Head>
                <title>내 프로필|노드버드</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={FollowingList} />
                <FollowList header="팔로워 목록" data={FollowerList} />
            </AppLayout>
        </>
    );
};
export default Profile;
