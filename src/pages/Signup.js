import React from 'react'


const Signup = () => {
  return (
    <>
    <div>
      <img src='/images/img2.jpeg' alt='loginpage'></img>
    </div>
    <form className='signup'>
        <label for="email"  className='mail' >Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/>
        <label for="password"  className='pass' >Password:</label><br/>
        <input type="password" id="password" name="password" required/><br/>
        <label for="password"  className='pass' >Confirm Password:</label><br/>
        <input type="password" id="password" name="password" required/><br/>
        <input type="submit" value="Sign Up"/><br/>
        <h4>OR</h4><br/>
        <p>Already have an account? <a href=".." class="login">Login</a></p>
    </form>
   
    </>
  )
}

export default Signup;