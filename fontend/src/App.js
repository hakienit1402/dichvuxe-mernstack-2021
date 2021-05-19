import { BackTop, Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthNav from "./components/common/headerNav/AuthNav";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home/HomePage";
import AuthRoute from "./routes/AuthRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ScrollToTop from "./ScrollToTop";

const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 199,
            width: "100%",
            background:'#fff',
          }}
        >
          <AuthNav />
        </Header>
        <Content
          className="site-layout"
          style={{ marginTop: 64 }}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
        </Content>
        <BackTop />
        <Footer style={{ textAlign: "center",zIndex:5}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
