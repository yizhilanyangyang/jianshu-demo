import React,{PureComponent} from 'react';
import axios from 'axios';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';

import data from '../../api/home.json';
console.log(data)


class Home extends PureComponent{
  constructor(props){
    super(props)
    this.state={
      showBackTop: false,
    }
  }


  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="bannerImg" alt='' src="https://pic2.zhimg.com/50/v2-587b76ab28fc7757c069466fe4697595_hd.jpg"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.state.showBackTop ? <BackTop onClick={this.handlerScrollTop}><i className="iconfont icon-jiantou-copy-copy"></i></BackTop> : null
        }

      </HomeWrapper>
    )
  }

  handlerScrollTop(){
    window.scrollTo(0,0)
  }

  bindScrollEvents(){
    window.addEventListener('scroll',()=>{
      this.changeScrollTopShow()
    })
  }

  changeScrollTopShow(){
    const scrollTop =document.documentElement.scrollTop
    this.setState({
      showBackTop:scrollTop>300? true:false
    })
  }

  componentDidMount(){
    this.bindScrollEvents();
    // 请求接口
    axios.get('../../api/home.json').then((res)=>{
      console.log(res.data)
    })

  }
}
export default Home
