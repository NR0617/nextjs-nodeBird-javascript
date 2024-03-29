import React, { useCallback } from "react";
//import PropTypes from "prop-types";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
    //여기는 CSS적듯이 적어주면 된다
    margin: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    //const style = useMemo(() => ({ matginTOp: 10 }), []); //리렌더링 돼도 같은 객체가 유지

    const onSubmitForm = useCallback(() => {
        //antd는 이미 e.preventDefault가 적용되어있다
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input
                    name="user-email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            {/* <div style={style}> */}
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
                {/* </div> */}
            </ButtonWrapper>
        </FormWrapper>
    );
};
// redux 쓰면 props를 받지 않아도 되기 떄문에 이부분은 없어도 된다
// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,
// };
export default LoginForm;
