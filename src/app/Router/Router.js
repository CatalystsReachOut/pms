import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import { ROUTES } from './RouterConfig';

const RouteWithAdmin = ({Element}) =>{
    return (
      <>
        <Element />
      </>
    );
  }

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path={ROUTES.dashboard} element={<RouteWithAdmin Element={Dashboard}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router