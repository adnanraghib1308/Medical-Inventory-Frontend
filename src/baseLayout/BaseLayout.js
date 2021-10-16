import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Menu, Button, Layout, Typography, Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";
import styles from "./BaseLayout.module.scss";
import { LOGOUT } from '../helpers/constant';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const SideMenu = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const loggedOutMenuArray = [
    {
      key: "login",
      linkTo: "/login",
      iconType: "login",
      tabName: "Login",
    },
    {
      key: "signup",
      linkTo: "/register",
      iconType: "user",
      tabName: "Sign Up",
    }
  ]
  const loggedInMenuArray = [
    {
      key: "home",
      linkTo: "/",
      iconType: "home",
      tabName: "Home",
    },
    {
      key: "inventory",
      linkTo: "/inventory",
      iconType: "plus-circle",
      tabName: "Inventory",
    },
    {
      key: "billing",
      linkTo: "/bill",
      iconType: "double-right",
      tabName: "Billing",
    },
    {
      key: "sales",
      linkTo: "/sales",
      iconType: "check",
      tabName: "Sales",
    },
    {
      key: "profile",
      linkTo: "/profile",
      iconType: "profile",
      tabName: "Profile",
    },
  ];
  const menuArray = isLoggedIn ? loggedInMenuArray : loggedOutMenuArray;
  return (
      <Menu
        className={styles['menu']}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
        {menuArray.map((tab) => {
          return (
            <Menu.Item key={tab.key}>
              <Link to={tab.linkTo}>
                <Icon type={tab.iconType} filled="true" className={styles['menu-item-icon']} />
                <span className="nav-text">{tab.tabName}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
  );
}

const BaseLayout = ({ user, children, sider = {}}) => {
  const [menuToggleState, setMenuToggleState] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const collapseTrigger = event => {
    setMenuToggleState(!menuToggleState);
  }

  const userLogout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT});
  }, [dispatch]);

  const userLogin = () => (<Link to='/login' />)

  return(
    <Layout>
      <Sider
        className = {styles['sider']}
        breakpoint="lg"
        width={230}
        collapsedWidth={0}
        collapsed = {menuToggleState}
        collapsible trigger={null}
      > 
        <SideMenu />
      </Sider>
      <Layout className={styles['content-container']}>
        <Header style={{paddingLeft: 20}}>
          <Row>
            <Col span = {2}>
              <Icon
                type={menuToggleState ? "menu-unfold": "menu-fold"}
                onClick={collapseTrigger}
                className={styles['menu-fold-unfold-icon']}
              />
            </Col>
            <Col span = {20}>
              <Title style={{color: "#fff", margin: 10, textAlign: 'center'}} level={2}>{'Medical Inventory Management'}</Title>
            </Col>
            <Col span = {2}>
              { isLoggedIn && <Button type = 'primary' onClick = {userLogout}>Log Out</Button> }
            </Col>
          </Row>
        </Header>
          <Content className={styles['.content-container']}>
            {children}
          </Content>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
