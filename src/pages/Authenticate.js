import React,{useState} from 'react';
import '../styles/login.css';

const userDetails = [
  {
    username : "mithula",
    email :"mithula@gmail.com",
    pswd : "user1"
  },
  {
    username : "jayani",
    email :"jayani@gmail.com",
    pswd : "user2"
  }
];
function Authenticate() {
  const [error,setError] = useState(false);
  const [errMsgL,setErrMsgL] = useState("");
  const [errMsgSu,setErrMsgSu] = useState("");

  const onLogin = (e) => {

    let username = document.getElementById('logemail');
    let pswd = document.getElementById('logpass');

    if((username.value === 'mithula@gmail.com' && pswd.value === 'user1') || (username.value === 'jayani@gmail.com' && pswd.value === 'user2') ){
      window.location.reload();  
      window.location.href = 'http://localhost:3000/home';
    } else {
        setError(true);
        setErrMsgL("*username or password not matched");
    }
  }

  const onSignUp = (e) => {
    let email = document.getElementById('logemail-sign');

        userDetails && userDetails.foreach((usr,idx) => {
          if(usr.email === email.value ){
            setError(true);
            setErrMsgSu("User Already registered..!");
          }
        });
  }

  return (
    <div>
        {
        <div classNameName='App'>
         <div className="section">
         <div className="container">
           <div className="row full-height justify-content-center">
             <div className="col-12 text-center align-self-center py-5">
               <div className="section pb-5 pt-5 pt-sm-2 text-center">
                 <h6 className="mb-0 pb-3">
                   <span>Log In </span><span>Sign Up</span>
                 </h6>
                 <input
                   className="checkbox"
                   type="checkbox"
                   id="reg-log"
                   name="reg-log"
                 />
                 <label for="reg-log"></label>
                 <div className="card-3d-wrap mx-auto">
                   <div className="card-3d-wrapper">
                     <div className="card-front">
                       <div className="center-wrap">
                         <div className="section text-center">
                           <h4 className="mb-4 pb-3">Log In</h4>
                           {error && <span style = {{fontSize: "inherit"}}>{errMsgL}</span>}
                           <div className="form-group">
                             <input
                               type="email"
                               name="logemail"
                               className="form-style"
                               placeholder="Your Email"
                               id="logemail"
                               autocomplete="off"
                             />
                             <i className="input-icon uil uil-at"></i>
                           </div>
                           <div className="form-group mt-2">
                             <input
                               type="password"
                               name="logpass"
                               className="form-style"
                               placeholder="Your Password"
                               id="logpass"
                               autocomplete="off"
                             />
                             <i className="input-icon uil uil-lock-alt"></i>
                           </div>
                           <button className="btn mt-4" onClick={(e)=>{onLogin(e)}}>Log In</button>
                           <p className="mb-0 mt-4 text-center">
                             <a href="#0" className="link">Forgot your password?</a>
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="card-back">
                       <div className="center-wrap">
                         <div className="section text-center">
                           <h4 className="mb-4 pb-3">Sign Up</h4>
                           {error && <span style = {{fontSize: "inherit"}}>{errMsgSu}</span>}
                           <div className="form-group">
                             <input
                               type="text"
                               name="logname"
                               className="form-style"
                               placeholder="Your Full Name"
                               id="logname"
                               autocomplete="off"
                             />
                             <i className="input-icon uil uil-user"></i>
                           </div>
                           <div className="form-group mt-2">
                             <input
                               type="email"
                               name="logemail"
                               className="form-style"
                               placeholder="Your Email"
                               id="logemail-sign"
                               autocomplete="off"
                             />
                             <i className="input-icon uil uil-at"></i>
                           </div>
                           <div className="form-group mt-2">
                             <input
                               type="password"
                               name="logpass"
                               className="form-style"
                               placeholder="Your Password"
                               id="logpass"
                               autocomplete="off"
                             />
                             <i className="input-icon uil uil-lock-alt"></i>
                           </div>
                           <button className="btn mt-4" onClick={(e)=>{onSignUp(e)}}>Sign Up</button>
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

export default Authenticate;