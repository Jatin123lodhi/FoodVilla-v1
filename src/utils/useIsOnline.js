import { useEffect, useState } from "react";

const useIsOnline = ()=>{
    //logic to check is it online or not
    //and whenever state changes update it
    const [isOnline,setIsOnline] = useState(true);
    const handelOnline = ()=>{
        console.log('online')
        setIsOnline(true);
    }
    const handelOffline = ()=>{
        console.log('offline')
        setIsOnline(false);
    }
    useEffect(()=>{
        window.addEventListener('online',handelOnline)
        window.addEventListener('offline',handelOffline)

        return ()=>{
            window.removeEventListener('online',handelOnline);
            window.removeEventListener('offline',handelOffline);
        }

    },[])
    

    return isOnline;
}

export default useIsOnline;