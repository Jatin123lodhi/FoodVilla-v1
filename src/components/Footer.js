 import { useContext } from "react";
import UserContext from "../utils/UserContext";
export const Footer = () => {
  // const [name,setName] = useState('');
  // useEffect(()=>{
  //   console.log('inside useEffect');
  // })
  // const {user} = useContext(UserContext); 
  return (
      <div className="bg-gray-200 p-3  text-center fixed inset-x-0 bottom-0">
        {/* <h4>This site is developed by {user.name}-{user.email}</h4> */}
        <UserContext.Consumer>
          { ({user}) => <h3>This site is developed by {user.name}</h3>}
        </UserContext.Consumer>
      </div>
    );
  };