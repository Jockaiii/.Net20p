import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import {AccessoriesView} from '../view/accessoriesview/AccessoriesView'
import {BrandView} from '../view/brandview/BrandView'
import {NewsView} from '../view/newsview/NewsView'
import {ShopView} from '../view/shopview/ShopView'
import RoutingPath from './RoutingPath'

export const Routes = ({children}) => {
    return (
        <BrowserRouter>
        {children}
        <Switch> 
            <Route exact path={RoutingPath.signInView} component={SignInView} />
            <Route exact path={RoutingPath.homeView} component={HomeView} />
            <Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
            <Route exact path={RoutingPath.brandView} component={BrandView} />
            <Route exact path={RoutingPath.newsView} component={NewsView} />
            <Route exact path={RoutingPath.ShopView} component={ShopView} />
            <Route component={HomeView} />
        </Switch>
        </BrowserRouter>
    )
}

Routes.propTypes = {
    children: PropTypes.array,
  }