import React from 'react'

const Login = () => {
  return (
    <>
    <div>
      <img src='/images/img2.jpeg' alt='signup'></img>
    </div>
    <form className='login'>
        <label for="email"  className='mail' >Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/>
        <label for="password"  className='pass' >Password:</label><br/>
        <input type="password" id="password" name="password" required/><br/>
        <a href="forgotPassword.html" class="forgot-password">Forgot Password?</a><br/>
        <input type="submit" value="login"/><br/>
        <h5>OR</h5><br/>
        <p>Don't have an account? <a href=".." class="sign-up">Signup</a></p>
    </form>
    </>
  )
}

export default Login;