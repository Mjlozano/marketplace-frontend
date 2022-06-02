import React from "react";

const Input = ({attribute,handleChange,param}) => {
    return (
        <div>
            <input  
                id={attribute.id}
                type={attribute.type}
                placeholder={attribute.placeholder}
                className={param ? "error input-Input "  : "input-Input"}
                name={attribute.name}
                onChange={(e)=>handleChange(e.target.name,e.target.value)}
            />
        </div>
    );
}
export default Input;