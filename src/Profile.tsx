import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
  const profile = useSelector<any, any>(state => state.profile)
  console.log(profile)
  const status = useSelector<any, any>(state => state.status)

  return (
    <div>
      {/*<span>{profile.profile.fullName}</span>*/}
      {/*<span>{profile.status}</span>*/}
    </div>
  );
};

export default Profile;