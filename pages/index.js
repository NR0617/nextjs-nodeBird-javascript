import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>홈|노드버드</title>
            </Head>
            <AppLayout>
                <div>Hello, Nextjs!</div>
            </AppLayout>
        </>
    );
};
export default Home;
