import {path} from './path.js'
import Home from '../Pages/Homepage/Homepage.jsx'
import Gallery from '../Components/Gallery/Gallery.jsx'
import Products from '../Pages/Productspage/Productspage.jsx'
export let items=[
    {
        path:path.Home,
        Component:Home
    },
    {
        path:path.Products,
        Component:Products
    },
    {
        path:path.Gallery,
        Component:Gallery
    }
]