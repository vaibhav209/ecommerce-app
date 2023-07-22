import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import routes from "../../routes/routes.json";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginOption, setLoginOption] = useState('');

  const { loginHandler } = useContext(AuthContext);

  const loginBtnHandler = () => {
    if (
      (username === 'admin' &&
        password === 'admin' &&
        loginOption === 'admin') ||
      (username === 'user' && password === 'user' && loginOption === 'user')
    ) {
      loginHandler();
      setUsername('');
      setPassword('');
    } else {
      alert('Fill proper details');
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="p-3">
        <>
          <div className="p-4">
            <h3 className="mb-4">Login</h3>
            <Form>
              <Form.Group className="mb-3">
                <h6>Username</h6>
                <Form.Control
                  style={{ width: '600px' }}
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <h6>Password</h6>
                <Form.Control
                  style={{ width: '600px' }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Group className="mb-3 mt-4">
                  <h6>Admin/User</h6>
                  <div className="d-flex">
                    <div className="mr-3">
                      <Form.Check
                        label="Admin"
                        type="radio"
                        name="loginOptionName"
                        value="admin"
                        onClick={(e) => setLoginOption(e.target.value)}
                      />
                    </div>
                    <div>
                      <Form.Check
                        style={{ marginLeft: '15px' }}
                        label="User"
                        type="radio"
                        name="loginOptionName"
                        value="user"
                        onClick={(e) => setLoginOption(e.target.value)}
                      />
                    </div>
                  </div>
                </Form.Group>
                <Form.Text className="text-muted">Note- </Form.Text>
                <br />
                <Form.Text className="text-muted">
                  Admin {'=>'} username & password : admin
                </Form.Text>
                <br />
                <Form.Text className="text-muted">
                  User {'=>'} username & password : user
                </Form.Text>
              </Form.Group>
            </Form>

            <div className="text-left">
              <Button
                variant="outline-primary"
                disabled={!(username && password)}
                onClick={loginBtnHandler}
              >
                Login
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default LoginForm;
