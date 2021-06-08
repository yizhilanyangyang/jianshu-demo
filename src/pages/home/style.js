import styled from 'styled-components'
export const HomeWrapper = styled.div`
width:960px;
margin: 0 auto;
height:300px;
s
`;

export const HomeLeft =styled.div`
padding-top:30px;
width:625px;
margin-left:15px;
float:left;
.bannerImg{
  width:650px;
}
`;

export const HomeRight =styled.div`
width:280xp;
float:right;
`;

export const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;

`;
export const TopicItem=styled.div`
float:left;
background:#f7f7f7;
padding-right:10px;
height:32px;
line-height:32px;
fon-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius: 4px;
margin-left:18px;
margin-bottom:18px;
.topImg{
  display:block;
  float: left;
  width:32px;
  height:32px;
  margin-right:10px;

}
`;


export const ListItem=styled.div`
overflow:hidden;
padding: 20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
  display:block;
  width:125px;
  height:100px;
  float:right;
  border-radius:10px;
}
`;
export const ListInfo=styled.div`
width:500px;
float:left;
padding-right:10px;
box-sizing:border-box;
.title{
  font-size:18px
  font-weight:bold;
  lien-height:27px;
  color:#333;
}
.desc{
  line-height:24px;
  font-size:13px;
  color:#999;
}

`;


export const RecommendWrapper=styled.div`
margin:30px 0;
width:280px;

`;
export const RecommendItem=styled.div`
width：280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;


`;

export const WriterWrapper=styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
text-align:center;
s
`;
 export const WriterItem=styled.div`
 `;
export const BackTop=styled.div`
position:fixed;
bottom:30px;
right:30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #dcdcdc;
.iconfont{
  font-size:30px;
  color:#999;
}
`;
