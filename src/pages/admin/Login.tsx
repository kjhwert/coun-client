import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { ILoginForm, userLogin } from "../../features/user/userSlice";
import { notify } from "../../shared/notify";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });

  const login = () => {
    const { email, password } = loginForm;
    if (!email) return notify.warning("아이디를 입력해주세요.");
    if (!password) return notify.warning("비밀번호를 입력해주세요.");
    dispatch(userLogin(loginForm));
    //TODO history를 어떻게 처리할거야?
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [target.name]: target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        value={loginForm.email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        value={loginForm.password}
        onChange={onChange}
      />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Login;
