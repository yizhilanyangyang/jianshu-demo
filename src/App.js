import {BrowserRouter,Route} from 'react-router-dom';

import Header from './components/header';

import Home from './pages/home'
// import Detail from './pages/detail'
import Detail from './pages/detail/loadable.js'




function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        {/* <Route path="/" exact render={()=><div>首页</div>}></Route>
        <Route path="/detail" exact render={()=><div>详情页</div>}></Route> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
