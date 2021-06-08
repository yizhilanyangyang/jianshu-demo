import React,{Component} from 'react';
import {RecommendWrapper,RecommendItem} from '../style'

class Recommend extends Component{

  constructor(props){
    super(props);
    this.state={
      recommendList:[
        {
          id:1,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png'
        },
        {
          id:2,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
          id:3,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
          id:4,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
      ]
    }
  }

  render(){
    return (
      <RecommendWrapper>
      {
        this.state.recommendList.map((item,index)=>{
          return (
          <RecommendItem key={index} imgUrl={item.img}>
          </RecommendItem>)
        })
      }
      </RecommendWrapper>
    )
  }
}
export default Recommend
