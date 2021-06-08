import React,{Component} from 'react';
import axios from 'axios';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';

import data from '../../api/home.json';
console.log(data)


class Home extends Component{
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
        <BackTop onClick={this.handlerScrollTop}></BackTop>
      </HomeWrapper>
    )
  }

  handlerScrollTop(){
    window.scrollTo(0,0)

  }

  componentDidMount(){
    axios.get('../../api/home.json').then((res)=>{
      console.log(res.data)
    })

  }
}
export default Home
