import App from './App'
import Erreur from './pages/Erreur'
import Apropos from './pages/Apropos'
import Logement , {loadData as logementLoader}from './pages/Logement'
import Accueil, {loadData as homeloader} from './pages/Accueil'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Accueil/>,
                loader: homeloader
            },
            {
                path: 'apropos',
                element: <Apropos/>
            },
            {
                path: 'logement/:id',
                element: <Logement/>,
                errorElement: <Erreur/>,
                loader: logementLoader
            },
            {
                path: '*',
                element: <Erreur/>
            },
        ]
    }
])

export default router