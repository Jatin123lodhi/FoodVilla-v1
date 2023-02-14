import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "DummyEmail@email.com",
  },
});
UserContext.displayName = 'UserContext'
export default UserContext;
