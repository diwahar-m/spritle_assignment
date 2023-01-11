import {useState} from 'react';
import{v4 as uuidv4} from 'uuid';
import {useNavigate} from "react-router-dom";
import Item from '../Item';
import './index.css'; 

const Home =()=>{

    const[leftNum,changeLeft]=useState('zero');
    const[symbol,changeSymbol]=useState('plus');
    const[rightNum,changeRight]=useState('zero');
    const[result,updateResult]=useState('');
    const[calculations,addCalculations]=useState([]);
    const[list1,addList]=useState([]);

    const navigate = useNavigate();

    const modifyLeft=(event)=>{
        changeLeft(event.target.value)
    }
    const modifySymbol=(event)=>{
        changeSymbol(event.target.value)
    }
    const modifyRight=(event)=>{
        changeRight(event.target.value)
    }

    const calculateValue=()=>{

        let n1 =leftNum;


        let cal = symbol;

        let n2 = rightNum;

        let s1; 

        let s2; 

        function times(right_operand){
            return '*' + right_operand;
        } 
        function plus(right_operand){
            return '+' + right_operand;
        }
        function minus(right_operand){
            return '-' + right_operand;
        } 
        function divided_by(right_operand){
            return '/' + right_operand;
        }
        
        function zero(operation){
            if (operation === undefined) return '0';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 0 + right_operand;
                        break;
                    case '-':
                        result= 0 - right_operand;
                        break;
                    case '*':
                        result= 0 * right_operand;
                        break; 
                    case '/':
                        result= 0 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function one(operation){
            if (operation === undefined) return '1';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 1 + right_operand;
                        break;
                    case '-':
                        result= 1 - right_operand;
                        break;
                    case '*':
                        result= 1 * right_operand;
                        break; 
                    case '/':
                        result= 1 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function two(operation){
            if (operation === undefined) return '2';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 2 + right_operand;
                        break;
                    case '-':
                        result= 2 - right_operand;
                        break;
                    case '*':
                        result= 2 * right_operand;
                        break; 
                    case '/':
                        result= 2 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function three(operation){
            if (operation === undefined) return '3';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 3 + right_operand;
                        break;
                    case '-':
                        result= 3 - right_operand;
                        break;
                    case '*':
                        result= 3 * right_operand;
                        break; 
                    case '/':
                        result= 3 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function four(operation){
            if (operation === undefined) return '4';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 4 + right_operand;
                        break;
                    case '-':
                        result= 4 - right_operand;
                        break;
                    case '*':
                        result= 4 * right_operand;
                        break; 
                    case '/':
                        result= 4 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function five(operation){
            if (operation === undefined) return '5';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 5 + right_operand;
                        break;
                    case '-':
                        result= 5 - right_operand;
                        break;
                    case '*':
                        result= 5 * right_operand;
                        break; 
                    case '/':
                        result= 5 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function six(operation){
            if (operation === undefined) return '6';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 6 + right_operand;
                        break;
                    case '-':
                        result= 6 - right_operand;
                        break;
                    case '*':
                        result= 6 * right_operand;
                        break; 
                    case '/':
                        result= 6 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function seven(operation){
            if (operation === undefined) return '7';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 7 + right_operand;
                        break;
                    case '-':
                        result= 7 - right_operand;
                        break;
                    case '*':
                        result= 7 * right_operand;
                        break; 
                    case '/':
                        result= 7 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function eight(operation){
            if (operation === undefined) return '8';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 8 + right_operand;
                        break;
                    case '-':
                        result= 8 - right_operand;
                        break;
                    case '*':
                        result= 8 * right_operand;
                        break; 
                    case '/':
                        result= 8 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
        
        function nine(operation){
            if (operation === undefined) return '9';
            
            else{
                let result;
                let right_operand =parseInt(operation[1])
                
                switch(operation[0]){
                    case '+':
                        result= 9 + right_operand;
                        break;
                    case '-':
                        result= 9 - right_operand;
                        break;
                    case '*':
                        result= 9 * right_operand;
                        break; 
                    case '/':
                        result= 9 / right_operand;
                        break;  
        
                }
        
                return Math.floor(result);
            }
        }
    

        if (n2==="zero") s1=zero();
        if (n2==="one") s1=one();
        if (n2==="two") s1=two();
        if (n2==="three") s1=three();
        if (n2==="four") s1=four();
        if (n2==="five") s1=five();
        if (n2==="six") s1=six();
        if (n2==="seven") s1=seven();
        if (n2==="eight") s1=eight();
        if (n2==="nine") s1=nine();

        if(cal==="plus"){

            if (n1==="zero") s2=zero(plus(s1));
            if (n1==="one") s2=one(plus(s1));
            if (n1==="two") s2=two(plus(s1));
            if (n1==="three") s2=three(plus(s1));
            if (n1==="four") s2=four(plus(s1));
            if (n1==="five") s2=five(plus(s1));
            if (n1==="six") s2=six(plus(s1));
            if (n1==="seven") s2=seven(plus(s1));
            if (n1==="eight") s2=eight(plus(s1));
            if (n1==="nine") s2=nine(plus(s1));

        } 

        if(cal==="minus"){

            if (n1==="zero") s2=zero(minus(s1));
            if (n1==="one") s2=one(minus(s1));
            if (n1==="two") s2=two(minus(s1));
            if (n1==="three") s2=three(minus(s1));
            if (n1==="four") s2=four(minus(s1));
            if (n1==="five") s2=five(minus(s1));
            if (n1==="six") s2=six(minus(s1));
            if (n1==="seven") s2=seven(minus(s1));
            if (n1==="eight") s2=eight(minus(s1));
            if (n1==="nine") s2=nine(minus(s1));

        } 

        if(cal==="times"){

            if (n1==="zero") s2=zero(times(s1));
            if (n1==="one") s2=one(times(s1));
            if (n1==="two") s2=two(times(s1));
            if (n1==="three") s2=three(times(s1));
            if (n1==="four") s2=four(times(s1));
            if (n1==="five") s2=five(times(s1));
            if (n1==="six") s2=six(times(s1));
            if (n1==="seven") s2=seven(times(s1));
            if (n1==="eight") s2=eight(times(s1));
            if (n1==="nine") s2=nine(times(s1));

        } 

        if(cal==="divided_by"){

            if (n1==="zero") s2=zero(divided_by(s1));
            if (n1==="one") s2=one(divided_by(s1));
            if (n1==="two") s2=two(divided_by(s1));
            if (n1==="three") s2=three(divided_by(s1));
            if (n1==="four") s2=four(divided_by(s1));
            if (n1==="five") s2=five(divided_by(s1));
            if (n1==="six") s2=six(divided_by(s1));
            if (n1==="seven") s2=seven(divided_by(s1));
            if (n1==="eight") s2=eight(divided_by(s1));
            if (n1==="nine") s2=nine(divided_by(s1));

        }

        updateResult(s2);

        let finalValue={
            id:uuidv4(),
            left:leftNum,
            cal:symbol, 
            right:rightNum,
            value:s2
        }

        addCalculations(
            (prevCalculations => [...prevCalculations,finalValue])
        )

        console.log(s2);

    }



    const addActivity=()=>{
        localStorage.setItem("calculation",JSON.stringify(calculations))

        const localValue = JSON.parse(localStorage.getItem('calculation'));

        addList(localValue);


    }

    const loggedOut=()=>{
        localStorage.removeItem('users');
        navigate("/");
    }

    




    return(
        <div className='home-con'>
            <div className='top'>
                <div>
                    <h1>YOU TELL, I DO</h1>
                    <p> ( Welcome to Master's account )</p>
                </div>
                 
                <button className="but1" onClick={loggedOut}>Logout</button>

            </div>
            
            <div className='main-con'>

                <div className='activity2'>
                        <h2> Students, give your inputs here</h2>
                        <div className="operation">
                            <div className="left">
                                <h1>Left operand</h1>
                                <select name="left" id="left" onChange={modifyLeft}>

                                    <option value="zero" selected="selected">0</option>
                                    <option value="one" >1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option> 
                                    <option value="five">5</option>
                                    <option value="six">6</option>
                                    <option value="seven">7</option>
                                    <option value="eight">8</option>
                                    <option value="nine">9</option>
                                </select>

                            </div> 
                            <div className="center">
                                <h1>Operation</h1>
                                <select name="maths" id="maths" onChange={modifySymbol}>
                                    <option value="plus" selected="selected">+</option>
                                    <option value="minus">-</option>
                                    <option value="divided_by">/</option>
                                    <option value="times">*</option>
                                </select>
                                
                            </div>
                            <div className="right">
                                <h1>Right operand</h1>
                                <select name="right" id="right" onChange={modifyRight}>
                                    <option value="zero" selected="selected">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                    <option value="four">4</option> 
                                    <option value="five">5</option>
                                    <option value="six">6</option>
                                    <option value="seven">7</option>
                                    <option value="eight">8</option>
                                    <option value="nine">9</option>
                                </select>
                                
                            </div>
                        </div>

                        <button type="button" id="button1" onClick={calculateValue}>Calculate</button>

                        <h1>Result: <span>{result}</span></h1>

                        <button className="but6" onClick={addActivity}>Add to activity</button>

                </div>


                <div className='activity4'>
                    <h2>Activity</h2>
                    <ul id='listContainer'>
                        {list1.map((eachList)=>(
                            <Item key={eachList.id} details={eachList}/>
                        ))}

                    </ul>

                </div>

            </div>
        </div>

    )
}

export default Home;