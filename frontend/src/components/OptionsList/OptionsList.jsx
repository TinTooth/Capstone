const OptionsList = ({type,options}) => {
    return !type.includes("Size") ? (
        <div className="option-list">
            <h2>{type}</h2>
            {options.map((o,i) => {
                return o.type === type ? (<div key = {i} className="option">{o.description}</div>):null;
            })}
        </div>
      ):
      <table>
        <thead>
            <tr>
                <th>Cake Size</th>
                <th>Servings per Cake</th>
            </tr>
        </thead>
        <tbody>
            {options.map((o,i)=>{
                return o.type === "Cake Size" ? ( 
                    <tr key = {i}>
                        <td>{o.description}</td>
                        <td>{o.serves}</td>
                    </tr>
                ):null
            })}
        </tbody>
      </table>;
}
 
export default OptionsList;