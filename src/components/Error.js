import { useRouteError } from "react-router-dom";

const  Error = ()=>{
    const err = useRouteError();
    console.log(err);
    const {status,statusText} = err;
    return(
        <>
            <h1>Opps!</h1>
            <h2>Something went wrong</h2>
            <h3>Status : {status} </h3>
            <h3>Status Text : {statusText} </h3>
        </>
    );
}

export default Error