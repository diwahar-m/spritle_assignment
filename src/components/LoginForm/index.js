
import { useState} from 'react';
import {useNavigate} from "react-router-dom";
import './index.css';

const LoginForm=(props)=>{

    const navigate=useNavigate();

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[role,setRole]=useState('master');

    const[username1,logUser]=useState('');
    const[password1,logPass]=useState('');
    const[role1,logRole]=useState('master');

    const [logError,changeLogError]=useState(''); 
    const [signError,changeSignError]=useState('');

    const signUsername=(event)=>{
        setUsername(event.target.value);
    }
    const signPassword=(event)=>{
        setPassword(event.target.value);
    }
    const signingRole=(event)=>{
        setRole(event.target.value);
    }
    

    const logUsername=(event)=>{
        logUser(event.target.value);
    }
    const logPassword=(event)=>{
        logPass(event.target.value);
    }
    const loggingRole=(event)=>{
        logRole(event.target.value);
    }

    const registerUser=(event)=>{
        
        if( (role!=="" && username!=="")&& password!==""){
            
            changeSignError("");
            const user = {
                role2: role,
                username2: username, 
                password2: password
            }
            localStorage.setItem('users',JSON.stringify(user)) ;
            if(role==="master"){
                navigate("/home");
                
            }else{
                navigate("/home2");

            }
            

        }else{
            changeSignError("Please sign up all your inputs");
        }
        
      
    } 

    const checkUser=(event)=>{

        if( (role1!=="" || username1!=="")|| password1!==""){
            changeLogError("Please enter valid details");
        }

        if( (role1!=="" && username1!=="")&& password1!==""){
            
            changeSignError("");
           
            const data =JSON.parse(localStorage.getItem('users')); 

            const {role2,password2,username2} = data; 
            if((role1===role2 && password1===password2) && username1===username2){
                if(role1==='Master') navigate('/home');
                if(role1==='student') navigate('/home2');
            }else{
                changeLogError("Please enter valid details");

            }
            

        }else{
            changeLogError("Please log in all your inputs");
        }

       
    }


    return(
        <div className='container-login'>
           

            <div className='con1-login'>
                <h1>Sign Up</h1>

                <div className='con1-login'  >
                    <label htmlFor="role">Role:</label>
                    <select name="role" id="role" value={role} onChange={signingRole}>
                        <option value="master" >Master</option>
                        <option value="student">Student</option>
                        
                    </select>
                    <label  htmlFor="sign-name">Name:</label>

                    <input type='text' id='sign-name' placeholder="username..." onChange={signUsername} value={username}/>
                    <label htmlFor="sign-password">Password:</label>

                    <input type='password' id='sign-password' placeholder="password..." onChange={signPassword} value={password}/>
                    
                    <button type='button' onClick={registerUser}>Submit</button>
                </div>
                <p className='error' >{signError}</p>



            </div>

            <hr/>


           

            <div className='con2-login'>
                
                <h1>Login</h1>

                <div  className='con2-login' >
                    <label htmlFor="role2">Role:</label>
                    <select name="role2" id="role2" onChange={loggingRole} value={role1}>
                        <option value="master">Master</option>
                        <option value="student">Student</option>
                        
                    </select>
                    <label htmlFor="log-name">Name:</label>
                    <input type='text' id='log-name' placeholder="username..." onChange={logUsername} value={username1}/>
                    <label  htmlFor="sign-password2">Password:</label>
                    <input type='password' id='sign-password2' placeholder="password..." onChange={logPassword} value={password1}/>
                    
                    <button type='button' onClick={checkUser}>Submit</button>
                </div>
                <p className='error'>{logError}</p>

            </div>

        </div>



    )
}

export default LoginForm;