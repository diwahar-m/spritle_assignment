import {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Item2 from '../Item2';
import './index.css'; 

const Home2 =()=>{

    const[list3,updateList]=useState([]); 

    const navigate = useNavigate();

    useEffect(()=>{
        const getValue = JSON.parse(localStorage.getItem("calculation")); 
        updateList(getValue)

    },[])

    const loggedOut=()=>{
        localStorage.removeItem('users');
        navigate("/");
    }

    
    return(
        <div className='home-con2'>
            <div class="top2">
                <div>
                    <h1>YOU TELL , I DO</h1>
                    <p> ( Welcome to student's account ) </p>

                </div>
                <button type="button" class="but2" onClick={loggedOut}>Logout</button>

            </div>
            
            <div className='main-con2'>
                <h2>Activities done by master</h2>

                <div className='activity6'>
                        <ul id='listContainer'>
                            {list3.map((eachList)=>(
                                <Item2 key={eachList.id} details={eachList}/>
                            ))}

                        </ul>

                </div>

            </div>

        </div>

    )
}

export default Home2;