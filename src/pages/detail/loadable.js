import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return <div>正在加载中。。。</div>
  },
});

export default () => <LoadableComponent></LoadableComponent>

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }