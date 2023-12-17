import {useState} from "react"
import './Register.css';
import logo from '../../Logos/png/logo-no-background.png'
// import axios from "axios";
// import { UserContext } from "../UserContext.jsx";
const Register = () => {
//   const [username,setname]=useState();
//   const [password,setpassword]=useState();
  const [ShowPassword,setShowPassword]=useState(false);
// const {setUsername,setId}= useContext(UserContext);
const [LoginOrRegister,setLoginOrRegister]=useState('signup');
  const register=async(e)=>{
    e.preventDefault();
//     const url=LoginOrRegister==="register"?"register":"login";
//     const data=await axios.post(url,{username,password}).then(res=>res.data)
//     console.log(data);
//     setUsername(username);
//     setId(data.id);
  }
  return (
    <div id="Registration">
      <img src={logo} alt="flimmies" />
      <h2>{LoginOrRegister==="signup"?"Signin":"Signup"} to Flimmies</h2>
      <form action="" onSubmit={register}>
        <input type="text" className="d-block"  name="username" placeholder="Username" />
        <input type={ShowPassword?"text":"password"} name="password" className="d-block" placeholder="password" id="" />
        <p onClick={()=>setShowPassword(!ShowPassword)} className=" showpasscolor fs-6">show password</p>
        <button type="submit" className="btn-warning btn">{LoginOrRegister==="signup"?"signin":"signup"}</button>
        <div>
          
          {LoginOrRegister==='signin'&&(
            <div>
              Do you Already Have An account ? <button onClick={()=>(setLoginOrRegister('signup'))} id="loginRegister">Signin</button>
            </div>
          )}
          {LoginOrRegister==='signup' &&(
            <div>
            You don`t Have account ? <button onClick={()=>(setLoginOrRegister('signin'))} id="loginRegister">Please Signup!</button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Register