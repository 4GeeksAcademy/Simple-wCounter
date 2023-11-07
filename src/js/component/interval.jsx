import React, { useState, useEffect} from "react";

const Intervalo = () => {
    const [count, setCount] = useState(1);

    useEffect(()=> {
        setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
    })
    return (<p>{count}</p>);
}

export default Intervalo;