import './index.css' 

const Item=(props)=>{
    const {details}=props; 
    const{id,left,cal,right,value}=details;

    return(
        <li id={id}>
            <p><span>{left}</span> <span>{cal}</span> <span>{right}</span> gives <span className='value'>{value}</span>.</p>
        </li>

    )

}

export default Item;