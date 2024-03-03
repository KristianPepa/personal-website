import "./App.css";
import { Layout, Menu, Row, Typography } from "antd";
import {
  AreaChartOutlined,
  BuildOutlined,
  HomeOutlined,
  MailOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
// import Title from "antd/es/skeleton/Title";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
// } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
// import Home from "./Pages/Home/Home";
// import Projects from "./Pages/Projects/Projects";
// import Experience from "./Pages/Experience/Experience";
// import Achievements from "./Pages/Achievements/Achievements";
// import Contact from "./Pages/Contact/Contact";
// import LayoutContainer from "./Pages/Layout/LayoutContainer";

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
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <LayoutContainer>
    //             <Outlet />
    //           </LayoutContainer>
    //         }
    //       >
    //         <Route index element={<Home />} />
    //         <Route path="projects" element={<Projects />} />
    //         <Route path="experience" element={<Experience />} />
    //         <Route path="achievements" element={<Achievements />} />
    //         <Route path="contact" element={<Contact />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </div>
    <div className="App">
      <Layout>
        <Header className="header" style={{ backgroundColor: "#001529" }}>
          <Title level={2}>Kristian Pepa</Title>
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuList}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content>
          <div className="home">
            <div className="text-container">
              <Title level={5}>Hello!</Title>
              <Row>
                <Title level={1}>I'm</Title>
                <Title level={1} mark>
                  Kristian
                </Title>
              </Row>
              <Title level={1} mark>
                Pepa
              </Title>
              <Title level={5}>Hello!</Title>
              <Title level={1}>I'm a Frontend</Title>
              <Title level={1}>Developer</Title>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
