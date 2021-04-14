import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.svg'
import  RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
    const history = useHistory()

    return (
        <div className='desktopNavigationWrapper'>
            <img  className='navigationLogoType' 
                src={LogoType} 
                alt={'..error'} 
                onClick={() => history.push(RoutingPath.homeView)} />
            <span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
            <span className='accessoriesButton' onClick={() => history.push(RoutingPath.accessoriesView)}>Acessories</span>
            <span className='brandsButton' onClick={() => history.push(RoutingPath.brandView)}>Brands</span>
            <span className='newsButton' onClick={() => history.push(RoutingPath.newsView)}>News</span>
            <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
        </div>          
    )
}
