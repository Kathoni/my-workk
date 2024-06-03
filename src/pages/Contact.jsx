import React from 'react'

function Contact() {
  return (
    <div><div className='contact'>
    <h1>Start your designing with  us</h1>
      <img src={Contact} alt="" />
    <h2>We are available in any social</h2>
    <div class="wrapper">
    <h1>LOGIN</h1>
    <form action="">
            <div className="input-box">
                <input type="text" placeholder="USERNAME"required/>
            </div>
            <div class="input-box">
                <input type="password" placeholder="PASSWORD"required/>
            </div>
            <div class="remember-forget">
                <label><input type="checkbox"/>REMEMBER ME</label>
                <a className='a' href="#">Forgot password?</a>
            </div>
            <button type="submit"  class="btn">LOGIN</button>
            <div class="register-link">
                <p>Dont have an account? <br />
                    <a className='a' href="#">REGISTER</a>
                </p>
            </div>
        </form>
        </div>
        <h2>READY WHEN YOU ARE READY!!</h2>
    </div></div>
  )
}

export default Contact