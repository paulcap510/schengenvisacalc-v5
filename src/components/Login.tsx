import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-heading">Login</div>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
