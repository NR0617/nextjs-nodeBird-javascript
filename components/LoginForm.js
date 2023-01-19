import {useState, useCallback, useMemo} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordCheck, setPasswordCheck] = useState('');
  //props로 넘기는 함수는 꼭 useCallback을 써야 최적화가 된다
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, [])
  const onChangepassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [])
  const onSubmitForm = useCallback(() => {
    //onfinish는 e.prevent.default 안써도 된다
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  //const style = useMemo(() =>({ marginTop: 10 }),[])

  return(
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
      </div>
      <div>
      <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
        name='user-password'
        type='password'
        value={password}
        onChange={onChangepassword}
        required />
      </div>
      <div>
      {/* <label htmlFor='user-passwordcheck'>아이디</label>
        <br />
        <Input name='user-passwordcheck' value={id} onChange={onChangeId} required /> */}
      </div>
      {/* <ButtonWrapper style={style}> */}
      <ButtonWrapper>
          <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
        <Link href='/signup'><Button>회원가입</Button></Link>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default LoginForm;