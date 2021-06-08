import React from "react";

import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
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

const Header = (props)=>{
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
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch className={props.focused ? 'focused' :''} onFocus={props.handleFocus} onBlur={props.handleBlur}></NavSearch>
          </CSSTransition>
          <i  className={props.focused ? 'focused iconfont icon-fangdajing' :'iconfont icon-fangdajing'}></i>
        </NavSearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont icon-bi"></i>写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWraper>
  )
}

const mapStateToProps =(state)=>{
  return {
    focused: state.focused
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleFocus(){
      const action ={
        type:'search_focus'
      }
      dispatch(action)

    },
    handleBlur(){
      const action ={
        type:'search_blur'
      }
      dispatch(action)
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
