import React, {useEffect, useState} from "react";


function Apple() {
        const [values, setValues] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/api/vehicles').then((data)=>data.json()).then((val)=>setValues(val))
},[])

console.log(values, "values")
    return(
        <div>
            
            <select>
                {
                    
                    values.map((opts,i)=><option>{opts.Vehicle_Model}</option>)
                }
            </select>
        </div>
    );
}

export default Apple;

