import React, { Component } from "react";

import {CSSTransition} from 'react-transition-group'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  Addition,
  Button,
} from "./style";




class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      focused:false,

    }
    this.handleFocus =this.handleFocus.bind(this);
    this.handleBlur =this.handleBlur.bind(this)
  }

  render() {
    return (
      <HeaderWraper>
        {/* <Logo href="/"/> */}
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className={this.state.focused ? 'focused' :''} onFocus={this.handleFocus} onBlur={this.handleBlur}></NavSearch>
            </CSSTransition>
            <i  className={this.state.focused ? 'focused iconfont icon-fangdajing' :'iconfont icon-fangdajing'}></i>
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont icon-bi"></i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWraper>
    );
  }

  handleFocus() {
    this.setState({
      focused:true
    })
  }

  handleBlur() {
    this.setState({
      focused:false
    })
  }

}
export default Header;
