import { Layout, Menu, Switch, Typography } from "antd";
import {
  AreaChartOutlined,
  BuildOutlined,
  HomeOutlined,
  MailOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import "./App.css";
import { useState } from "react";

const { Header } = Layout;
const { Title } = Typography;

const menuList = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "experience",
    label: "Experience",
    icon: <AreaChartOutlined />,
  },
  {
    key: "project",
    label: "Projects",
    icon: <BuildOutlined />,
  },
  {
    key: "achievements",
    label: "Achievements",
    icon: <TrophyOutlined />,
  },
  {
    key: "contact",
    label: "Contact",
    icon: <MailOutlined />,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
