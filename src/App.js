import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import "./default.scss";
import { checkUserSession } from './redux/User/users.action'


//layout
import MainLayout from './Layouts/MainLayout'
import HomepageLayout from './Layouts/HomepageLayout'
import AdminLayout from "./Layouts/AdminLayout";

//components
import AdminToolbar from './components/AdminToolbar'

//pages
import Homepage from "./pages/Homepage/index";
import Registration from './pages/Registration';
import Login from './pages/Login/index';
import Recovery from './pages/Recovery/index';
import Dashboard from './pages/Dashboard/index'
import Admin from './pages/Admin/index';
import Search from './pages/Search/index'; 
import ProductDetails from './pages/ProductDetails/index'
import Cart from './pages/Cart/index'

//hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth';
import DashBoardLayout from "./Layouts/DashBoardLayout";




const App = props => {
const dispatch=useDispatch();
  
  useEffect(()=>{
    
 dispatch(checkUserSession);
  },[])
    
  

    
    return (
      <div className="App">
          <AdminToolbar/>
        <Switch>
          <Route exact path='/' render={() => (
            <HomepageLayout >
              <Homepage />
            </HomepageLayout>
          )} />
          <Route exact path='/search' render={() => (
            <HomepageLayout >
              <Search />
            </HomepageLayout>
          )} />
           <Route path='/search/:filterType' render={() => (
            <HomepageLayout >
              <Search />
            </HomepageLayout>
          )} />
          <Route path='/product/:productID' render={() => (
            <HomepageLayout >
              <ProductDetails />
            </HomepageLayout>
          )} />
           <Route path='/cart' render={() => (
            <HomepageLayout >
              <Cart/>
            </HomepageLayout>
          )} />
        
          <Route path='/registration'
            render={() =>  (
              <MainLayout >
                <Registration />
              </MainLayout>
            )} />
          <Route path='/login'
            render={() =>  (
              <MainLayout  >
                <Login />
              </MainLayout>
            )} />
          <Route path='/recovery'
            render={() => (
              <MainLayout  >
                <Recovery />
              </MainLayout>
            )} />

          <Route path='/dashboard'
            render={() => (
              <WithAuth>
              <DashBoardLayout  >
                <Dashboard />
              </DashBoardLayout>
              </WithAuth>
            )} />

          <Route path='/admin'
            render={() => (
              <WithAdminAuth>
              <AdminLayout  >
                <Admin />
              </AdminLayout>
              </WithAdminAuth>
            )} />
        </Switch>

      </div>
    );
  
}            



export default App;
