import React, {useEffect, useState} from "react";


function Apple() {
        const [values, setValues] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/petManager/petProfile').then((data)=>data.json()).then((val)=>setValues(val))
},[])

console.log(values, "values")
    return(
        <div>
            
            <select>
                {
                    
                    values.map((opts,i)=><option>{opts.pet_id}</option>)
                }
            </select>
        </div>
    );
}

export default Apple;

