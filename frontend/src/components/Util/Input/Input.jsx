const Input = ({type = "text",name,value,onChange,title, textArea = false}) => {
    return textArea ? ( 
    <label>
        {title}{" "}
        <textarea 
        type={type}
        name = {name}
        value = {value}
        onChange = {onChange} 
        />
    </label>
     ): 
     <label>
        {title}{" "}
        <input 
        type={type}
        name = {name}
        value = {value}
        onChange = {onChange} 
        />
    </label>;
}
 
export default Input;