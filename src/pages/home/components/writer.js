import React,{PureComponent} from 'react';
import {WriterWrapper,WriterItem} from '../style'
class Writer extends PureComponent{
  render(){
    return (
      <WriterWrapper>
        <WriterItem>
          作者推荐
        </WriterItem>
      </WriterWrapper>
    )
  }
}
export default Writer
