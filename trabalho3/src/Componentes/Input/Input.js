import './Input.css';

const Input = (props) =>{
    return(
        <input 
        className='input'
        type={props.type} 
        value={props.value} 
        onChange={(e) => props.set(e.target.value)} 
        placeholder = {props.placeholder}/>
    );
}

export default Input;