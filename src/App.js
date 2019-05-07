import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './styles.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '68px' }}
          >
            <Menu.Item key="1">Login</Menu.Item>
            <Menu.Item key="2">Registrar</Menu.Item>
          </Menu>
        </Header>
        <Content />
        <Footer />
      </Layout>
    );
  }
}

export default App;
