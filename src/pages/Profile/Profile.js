import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Card } from 'antd';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container" style={{textAlign: 'center'}}>
      <Card title="USER PROFILE" bordered={true} style={{ width: 'auto' }}>
        <p>{`First Name: ${currentUser.first_name}`}</p>
        <p>{`Last Name: ${currentUser.last_name}`}</p>
        <p>{`Email: ${currentUser.email}`}</p>
      </Card>
    </div>
  );
};

export default Profile;
