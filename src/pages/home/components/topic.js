import React,{Component} from 'react'
import {TopicWrapper,TopicItem} from '../style'
class Topic extends Component{
  constructor(props){
    super(props);
    this.state={
      topicList:[
        {
          id:1,
          title:'社会热点',
          img:'https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53'
        },
        {
          id:2,
          title:'社会热点',
          img:'https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53'
        },
        {
          id:3,
          title:'社会热点',
          img:'https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53'
        },
        {
          id:4,
          title:'社会热点',
          img:'https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53'
        },
        {
          id:5,
          title:'社会热点',
          img:'https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53'
        }
      ]
    }
  }
  render(){
    return (
      <TopicWrapper>
        {
        this.state.topicList.map((item,index)=>{
          return <TopicItem key={index}> <img className="topImg" src="https://pic2.zhimg.com/50/v2-dbdb610da77190c0f148573f34b55fac_720w.jpg?source=b1f6dc53" alt=""/>
          社会热点啊</TopicItem>
        })
        }
      </TopicWrapper>
    )
  }
}
export default Topic
