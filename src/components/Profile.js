import { useEffect, useState } from "react"; 

const Profile = (props)=>{
    const [count,setCount] = useState(0);
    const [count2] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log('Namaste everyone 11');
        }, 1000);

        return () =>{
            clearInterval(timer);
            console.log('useEffect Return')
        }
    },[])
    return(
        <>
            <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
            <h1>Profile Fun component</h1>
            <h2>Fun Name : {props.name} </h2>
            <h2>Count : {count} </h2>
            <button onClick={()=> setCount(1) }>On Click</button>
        </>
    );
}

export default Profile;