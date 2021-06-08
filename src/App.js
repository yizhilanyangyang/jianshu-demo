import {BrowserRouter,Route} from 'react-router-dom';

import Header from './components/header';

import Home from './pages/home'
// import Detail from './pages/detail'
import Detail from './pages/detail/loadable.js'
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        {/* <Route path="/" exact render={()=><div>首页</div>}></Route>
        <Route path="/detail" exact render={()=><div>详情页</div>}></Route> */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
