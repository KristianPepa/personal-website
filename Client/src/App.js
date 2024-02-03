import { Layout, Menu, Switch } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./App.css";
import Title from "antd/es/skeleton/Title";

const { Header } = Layout;

const menuList = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "project",
    label: "Projects",
    icon: "",
  },
  {
    key: "achievements",
    label: "Achievements",
    icon: "",
  },
  {
    key: "contact",
    label: "Contact",
    icon: "",
  },
];

function App() {
  return (
    <div className="App">
      <Header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title>Kristian Pepa</Title>
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuList}
            style={{ flex: 1, minWidth: 0 }}
          />
          <Switch defaultChecked />
        </div>
      </Header>
    </div>
  );
}

export default App;
