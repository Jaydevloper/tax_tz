import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderMenu from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const LayoutMenu = () => {
  return (
    <>
      <Layout>
        <HeaderMenu />
        <Content className="px-0 py-12">
          <div className="px-8 py-4">
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default LayoutMenu;
