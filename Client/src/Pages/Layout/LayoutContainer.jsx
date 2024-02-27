import React, { useState } from "react";
import { Layout, Menu, Switch, Typography } from "antd";
import {
  AreaChartOutlined,
  BuildOutlined,
  HomeOutlined,
  MailOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Title } = Typography;

const menuList = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "experience",
    label: <Link to="/experience">Experience</Link>,
    icon: <AreaChartOutlined />,
  },
  {
    key: "project",
    label: <Link to="/projects">Projects</Link>,
    icon: <BuildOutlined />,
  },
  {
    key: "achievements",
    label: <Link to="/achievements">Achievements</Link>,
    icon: <TrophyOutlined />,
  },
  {
    key: "contact",
    label: <Link to="/contact">Contact</Link>,
    icon: <MailOutlined />,
  },
];

const LayoutContainer = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout>
      <Header
        className="header"
        style={{ backgroundColor: darkMode ? "white" : "#001529" }}
      >
        <Title level={2}>Kristian Pepa</Title>
        <Menu
          theme={`${darkMode ? "light" : "dark"}`}
          mode="horizontal"
          items={menuList}
          style={{ flex: 1, minWidth: 0 }}
        />
        <div className="switch-container">
          <Switch onChange={() => setDarkMode(!darkMode)} />
        </div>
      </Header>
      {children}
    </Layout>
  );
};

export default LayoutContainer;
