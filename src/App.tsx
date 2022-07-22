import {useEffect} from "react";
import {Login} from "./Login";
import Profile from "./Profile";

export const App = () => {
  useEffect(() => {
    // authAPI.me()
    //   .then(res => console.log(res.data))
  })
  return (
    <div>
      <Login/>
      <Profile/>
    </div>
  )
}

