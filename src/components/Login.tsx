import './Login.css';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="overlay">Feature coming soon</div>
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
    </div>
  );
};

export default Login;
