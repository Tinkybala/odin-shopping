import App from './App.jsx';
import Plants from './Plants.jsx';
import PlantDetail from './plantDetail.jsx';
import Plantlist from './Plantlist.jsx';
import Home from './Home.jsx';
import Essentials from './Essentials.jsx';
import Cart from './Cart.jsx';
import ErrorPage from './ErrorPage.jsx';
import { element } from 'prop-types';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: '', element: <Home />},
            {path: 'cart', element: <Cart />},
            {path: 'essentials', element: <Essentials />},
            {path: 'plants', element: <Plants />, children: [
                {path: "0", element: <PlantDetail index={0} />},
                {path: '', element: <Plantlist />},
                {path: "*", element: <ErrorPage />}
            ]},
            {path: 'pots', element: <ErrorPage />}
        ]
    },
]

export default routes;