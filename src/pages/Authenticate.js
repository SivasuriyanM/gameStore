import React,{useState} from 'react';
import '../components/style.css';

function Authenticate() {
//     const [loginPage,setloginPage] = useState(true);
//   const [mainPage,setmainPage] = useState(false);
  const [error,setError] = useState(false);

  const onLogin = (e) => {

    let username = document.getElementById('logemail');
    let pswd = document.getElementById('logpass');

    if((username.value === 'abc' && pswd.value === '123') || (username.value === 'efg' && pswd.value === '456') ){
        window.location.href = 'http://localhost:3000/home';
    } else {
        setError(true);
    }

    // setmainPage(true);
    // setloginPage(false);
  }
  return (
    <div>
        {
        // loginPage && 
        <div className='App'>
         <div class="section">
         <div class="container">
           <div class="row full-height justify-content-center">
             <div class="col-12 text-center align-self-center py-5">
               <div class="section pb-5 pt-5 pt-sm-2 text-center">
                 <h6 class="mb-0 pb-3">
                   <span>Log In </span><span>Sign Up</span>
                 </h6>
                 <input
                   class="checkbox"
                   type="checkbox"
                   id="reg-log"
                   name="reg-log"
                 />
                 <label for="reg-log"></label>
                 <div class="card-3d-wrap mx-auto">
                   <div class="card-3d-wrapper">
                     <div class="card-front">
                       <div class="center-wrap">
                         <div class="section text-center">
                           <h4 class="mb-4 pb-3">Log In</h4>
                           {error && <span>*username or password not matched</span>}
                           <div class="form-group">
                             <input
                               type="email"
                               name="logemail"
                               class="form-style"
                               placeholder="Your Email"
                               id="logemail"
                               autocomplete="off"
                             />
                             <i class="input-icon uil uil-at"></i>
                           </div>
                           <div class="form-group mt-2">
                             <input
                               type="password"
                               name="logpass"
                               class="form-style"
                               placeholder="Your Password"
                               id="logpass"
                               autocomplete="off"
                             />
                             <i class="input-icon uil uil-lock-alt"></i>
                           </div>
                           <button class="btn mt-4" onClick={(e)=>{onLogin(e)}}>Submit</button>
                           {/* <a href="#" class="btn mt-4">submit</a> */}
                           <p class="mb-0 mt-4 text-center">
                             <a href="#0" class="link">Forgot your password?</a>
                           </p>
                         </div>
                       </div>
                     </div>
                     <div class="card-back">
                       <div class="center-wrap">
                         <div class="section text-center">
                           <h4 class="mb-4 pb-3">Sign Up</h4>
                           <div class="form-group">
                             <input
                               type="text"
                               name="logname"
                               class="form-style"
                               placeholder="Your Full Name"
                               id="logname"
                               autocomplete="off"
                             />
                             <i class="input-icon uil uil-user"></i>
                           </div>
                           <div class="form-group mt-2">
                             <input
                               type="email"
                               name="logemail"
                               class="form-style"
                               placeholder="Your Email"
                               id="logemail"
                               autocomplete="off"
                             />
                             <i class="input-icon uil uil-at"></i>
                           </div>
                           <div class="form-group mt-2">
                             <input
                               type="password"
                               name="logpass"
                               class="form-style"
                               placeholder="Your Password"
                               id="logpass"
                               autocomplete="off"
                             />
                             <i class="input-icon uil uil-lock-alt"></i>
                           </div>
                           <button class="btn mt-4" onClick={(e)=>{onLogin()}}>Submit</button>
                           {/* <a href="#" class="btn mt-4">submit</a> */}
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       </div>
       }</div>
  )
}

export default Authenticate