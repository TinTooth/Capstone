const OptionsList = ({type,options}) => {
    return (
        <div className="option-list">
            <h2>{type}</h2>
            {options.map((o,i) => {
                return o.type === type ? (<div key = {i} className="option">{o.description}</div>):null;
            })}
        </div>
      );
}
 
export default OptionsList;