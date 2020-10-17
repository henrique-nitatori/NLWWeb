import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Ophanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

export default () => {
    return(
        <BrowserRouter>
            <Switch >
                <Route  path="/" component={Landing} exact/> 
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Ophanage} />
            </Switch>
        </BrowserRouter>
    )
}