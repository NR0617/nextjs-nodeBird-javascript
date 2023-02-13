import React, { useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [nickname, onChangeNickname] = useInput("");

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password]
    );
    const [term, setTerm] = useState("");
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, password, nickname);
    }, [password, passwordCheck, term]);

    return (
        <>
            <Head>
                <title>회원가입|노드버드</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input
                            name="user-id"
                            value={id}
                            required
                            onChange={onChangeId}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input
                            name="user-nick"
                            value={nickname}
                            required
                            onChange={onChangeNickname}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-password">패스워드</label>
                        <br />
                        <Input
                            name="user-password"
                            type="password"
                            value={password}
                            required
                            onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-passwordCheck">패스워드</label>
                        <br />
                        <Input
                            name="user-passwordCheck"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                        {passwordError && (
                            <ErrorMessage>
                                비밀번호가 일치하지 않습니다.
                            </ErrorMessage>
                        )}
                        <div>
                            <Checkbox
                                name="user-term"
                                checked={term}
                                onChange={onChangeTerm}
                            >
                                제로초 말을 잘 들을 것을 동의합니다.
                            </Checkbox>
                            {termError && (
                                <ErrorMessage>
                                    약관에 동의하셔야 합니다.
                                </ErrorMessage>
                            )}
                        </div>
                        <div style={{ margiTop: 10 }}>
                            <Button type="primary" htmlType="submit">
                                가입하기
                            </Button>
                        </div>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};
export default Signup;
