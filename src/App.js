
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Breakfast/Breakfast';
import Detail from './Components/Detail/Detail';
import Dinner from './Components/Dinner/Dinner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import LunchItem from './Components/LunchItem/LunchItem';
import Menubar from './Components/Menubar/Menubar';
import Notfound from './Components/NotFound/Notfound';

function App() {
  return (
    
<div>
      <Header></Header>
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/lunchitem">
            <LunchItem></LunchItem>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route exact path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route exact path="/detail/:itemId">
            <Detail></Detail>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>

               
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
