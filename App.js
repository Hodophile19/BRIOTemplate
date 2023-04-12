import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="login-header">Log in to Brio League</h2>
        <form onSubmit={handleFormSubmit}>
          
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address or phone number"
          />
          
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <div className="login-remember">
            
            <div className="login-remember-me">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="login-forgot-password">
              <a href="https://www.google.com/">Forgot Password?</a>
            </div>
            
          </div>
          
          <button type="submit" className="login-button">
            Log In
          </button>

          <button className="google-button">
          <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=353985333474-88ga5vak3e1r9jr9pnh4amaj7fa39far.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fapi%2Foauth2%2FsocialLogin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%7B%22mode%22%3A%22login%22%2C%22lang%22%3A%22en%22%2C%22provider%22%3A%22google%22%2C%22visitorId%22%3A%22e0a10b68-3862-458d-83de-1cdd9ca29690%22%2C%22bsi%22%3A%22ca0b95be-478c-4449-9129-4beba5d3360a%22%2C%22collectionId%22%3A%2287084029-a014-4002-9cda-78b24ee0748b%22%2C%22privacyStatus%22%3A%22PRIVATE%22%2C%22svSession%22%3A%229049c0890f9d10afb504e2c9e46f659892ee6a6966b0b7f5bb0159650e43ddaa3fb625c419cdf083398a8511354095361e60994d53964e647acf431e4f798bcdf28e6fbe0b064a3dbfa630100a5b7e58f241ce87255b3b17d6d79fb17d650f2fc8285ee345e0152f2e707393c7e6532b282e3249d7ec35f54c9a08389a5501b41dacfab9b6b20ea46d37c204f8c9b1b9%22%7D&service=lso&o2v=1&flowName=GeneralOAuthFlow">Login with Google</a>
          </button>

          
        </form>
        <div className="login-signup">
          { 
            //<span>New here? </span> 
          }
          <a href="https://www.google.com/">New here? Sign up to Brio League</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
