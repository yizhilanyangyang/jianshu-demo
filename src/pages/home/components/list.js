import React,{PureComponent} from 'react';
import { isStyledComponent } from 'styled-components';
import {ListItem,ListInfo} from '../style';
import {Link} from 'react-router-dom'

class List extends PureComponent{
  constructor(props){
    super(props);
    this.state={
      articleList:[
        {
          id:1,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://upload-images.jianshu.io/upload_images/3687731-e1aca7c2fbf9628a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp'
        },
        {
          id:2,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://upload-images.jianshu.io/upload_images/3687731-e1aca7c2fbf9628a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp'
        },
        {
          id:3,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://upload-images.jianshu.io/upload_images/3687731-e1aca7c2fbf9628a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp'
        },
        {
          id:4,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://upload-images.jianshu.io/upload_images/3687731-e1aca7c2fbf9628a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp'
        },
        {
          id:5,
          title:'订单到底在哪里：从各大平台订单入口看产品设计',
          desc:'定义 首先，我们对本文的【订单】做如下定义；广义上，我们认为“订单”是对一笔交易从发生到结束过程的抽象总结。 很多人可能都没有意识到，【订单】实.0',
          img:'https://upload-images.jianshu.io/upload_images/3687731-e1aca7c2fbf9628a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp'
        }
      ]
    }
  }

  render(){
    return (
      <div>
      {
        this.state.articleList.map((item,index)=>{
          return (
            <Link key={index} to="/detail">
              <ListItem>
                <img className="pic" src={item.img} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })
      }
    </div>
    )
  }
}
export default List
