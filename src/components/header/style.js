import styled, { createGlobalStyle } from "styled-components";
import logoPic from "../../statics/logo.png";

export const  Globalstyle =createGlobalStyle`
body {
  margin: 0;
  background: red;
}
.cell{
  background: red;
}

`;

export const HeaderWraper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({ href: "/" })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
width:1000px;
height:100%;
margin: auto;
padding-right:110px;
box-sizing: border-box;
`;
export const NavItem = styled.div`
position:relative;
line-height:56px;
padding:0 15px;
font-size:17px;
&.left {
  float:left;
}
&.right{
  float:right;
}
&.active {
  color:#ea6f5a;
}
`;

export const NavSearchWrapper = styled.div`
position:relative;
float:left;


.iconfont{
  position:absolute;
  right:5px;
  bottom:4px;
  width: 30px;
  height:30px;
  line-height:30px;
  border-radius:15px;
  text-align:center;
  &.focused{
    background:#969696;
    color:white;
  }

}
`;
export const NavSearch= styled.input.attrs({
  placeholder:'搜索'
})`
fon-size:14px;
color:#666;
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
margin-top:9px;
padding: 0 30px 0 20px;
box-sizing:border-box;
margin-left:20px;
&::placeholder{
  color:#999;
}

&.focused{
  width:200px;
}


&.slide-enter{
  width:160px;
  transition: all 0.2s; ease-out;
}
&.slide-enter-active{
  width:240px;
}
&.slide-exit{
  transition: all 0.2s; ease-out;
}
&.slide-exit-active{
  width:160px;
}

`;

export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;

`;

export const Button=styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px solid #ec6149;
margin-right:19px;
padding:0 20px;
font-size:14px;
&.reg{
  color:#ec6149;
}
&.writting{
  color:#fff;
  background: #ec6149;
}


`;


