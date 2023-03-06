import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AdminNav from "./_component/Navbar";
import { Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
export default class AdminTemplate extends Component {
  render() {
    if (!localStorage.getItem("UserAdmin"))
      return <Navigate replace to="/auth" />;
    return (
      <div>
        {/* <Layout>
          <Sider>
            <AdminNav />
          </Sider>
        </Layout>
        <Layout>
          <Header style={{ backgroundColor: "yellow" }}>Header</Header>
          <Content>
            <Outlet />
          </Content>
        </Layout> */}

        <Layout>
          <Sider>
            <AdminNav />
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: "yellow" }}>
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location = "/auth";
                }}
              >
                Logout
              </button>
            </Header>
            <Content>
              <Outlet />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>

        {/* <Layout>
          <Footer>Footer</Footer>
        </Layout> */}
      </div>
    );
  }
}
