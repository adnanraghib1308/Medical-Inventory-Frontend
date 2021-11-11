import React from 'react'
import { Icon } from 'antd';
import { Redirect, Link, useHistory } from "react-router-dom";

const Card = (props) => {
  const {type, title, imageLink, buttonText} = props;
  const history = useHistory();
  const handleOnclick = () => {

    if(type === "add"){
      console.log("hellllll.....");
      //return <Link to="/inventory/add" />;
      history.push('/inventory/add');
    }
    else if(type === "list"){
      return <Link to="/inventory/list" />;
    }
  }
  return (
    <div className="card" style={{ maxWidth: "25rem", borderRadius: '5%' }}>
      <div className="card-body" style={{ textAlign: "center" }}>
        <h3 className="card-title font-weight-bold">{title}</h3>
        <img src={imageLink} style={{marginBottom: "20px"}}/>
        <br />
        <button className="btn btn-primary" onClick = {handleOnclick}>
          <Icon type="plus" />   {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card
