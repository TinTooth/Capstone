
const Input = ({type = "text",name,value,onChange,title, textArea = false, 
                                select = false, options}) => {

    return textArea ? ( 
    <label>
        {title}
        <textarea 
        type={type}
        name = {name}
        value = {value}
        onChange = {onChange} 
        />
    </label>
     ): select ? (
        <label>
            {title}
            <select name = {name} onChange = {onChange}>
                <option value = 'noneSelected'> Select Option</option>
                {options.map((o,i) => {
                    return (
                        <option key = {i} value = {o.description}>{o.description}</option>
                    )
                })}
            </select>
        </label>
     ):
     <label>
        {title}
        <input 
        type={type}
        name = {name}
        value = {value}
        onChange = {onChange} 
        />
    </label>;
}
 
export default Input;