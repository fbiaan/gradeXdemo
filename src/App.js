import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Ranking from "./pages/ranking/Ranking";
import Overview from "./pages/overview/Overview";
import CompSearch from "./pages/companySearch/CompanySearch"
import NewCompSearch from "./pages/companySearch/cmpSearch"
import CompSearch1 from "./pages/companySearch/Searchcomp1"
import Splash from "./pages/company/NewComp"
import CompareCompanies from "./pages/compareCompanies/CompCompanies"
import Rankinglist from "./pages/ranking/Rankinglist"
import OverCompLnk from "./pages/overview/OverCompani"

import SearchInves from "./pages/investment/SearchInves"
import OverInvesLnk from "./pages/investment/OverInves"


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>     
          <Route path="/overview">
            <Overview />
          </Route>                
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/compsearch">
            <CompSearch />
          </Route>
          <Route path="/newcompsearch">
            <NewCompSearch />
          </Route>
          <Route path="/splash/:productId">
            <Splash />
          </Route>
          <Route path="/compcompanies">
            <CompareCompanies />
          </Route>
          <Route path="/rankinglist">
            <Rankinglist/>
          </Route>
          <Route path="/compSearch1">
            <CompSearch1/>
          </Route>
          <Route path="/overcomp/:productId">
            <OverCompLnk/>
          </Route>
          <Route path="/invesSearch">
            <SearchInves/>
          </Route>
          <Route path="/overinves/:productId">
            <OverInvesLnk/>
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;
