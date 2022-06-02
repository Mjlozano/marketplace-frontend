import React from "react";

const Checkbox=({tipo,handleChange})=>{
    return(
        <div>
            <input type="checkbox" id={tipo} name={tipo} value={tipo}
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
            />{tipo}
        </div>
    )
};

export default Checkbox;