import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginRequest } from "../redux/AuthReducer/actions";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const isError = useSelector((store) => store.authReducer.isError);
  const loading = useSelector((store) => store.authReducer.isLoading);
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    if (email && password) {
      let user = {
        email,
        password,
      };
      dispatch(loginRequest(user)).then(() => {
        toast({
          position: "top",
          title: "Logged in successfully",
          status: "success",
          duration: 1000,
          isClosable: false,
        });
        navigate(location.state, { replace: true });
      });
    } else {
      toast({
        position: "top",
        title: "Fill valid credentials",
        status: "warning",
        duration: 1000,
        isClosable: false,
      });
    }
  };

  /*
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
  */

  if (loading) {
    return <Loading />;
  }

  return (
    <DIV error={isError.toString()} auth={isAuth.toString()}>
      {isAuth ? (
        <h1 className="logged-text">Logged in successfully ✅ </h1>
      ) : isError ? (
        <h1 className="error-text">Invalid credentials ⚠ </h1>
      ) : (
        <h1>Login</h1>
      )}
      <div>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isAuth}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isAuth}
          />
        </FormControl>
        <Button
          className="login-button"
          colorScheme="red"
          onClick={handleLogin}
          isDisabled={isAuth}
        >
          Login
        </Button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 450px;
  margin: 100px auto;
  border: 1px solid #e2686d;
  padding: 50px;
  h1 {
    font-size: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .login-button {
    width: 150px;
    display: block;
    margin: 20px auto 0px auto;
  }
  .input {
    border: ${({ error }) => (error === "true" ? "1px solid red" : null)};
  }
  .error-text {
    margin-bottom: 20px;
    color: ${({ error }) => (error === "true" ? "red" : null)};
  }
  .logged-text {
    margin-bottom: 20px;
    color: ${({ auth }) => (auth === "true" ? "green" : null)};
  }
`;

export default LoginPage;
