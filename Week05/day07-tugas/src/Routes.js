import React from 'react'
import {Navigate,useRoutes} from 'react-router-dom'
import Dashboard from './Layout/Dashboard'
import FormikCountryViewApiRedux from './ViewReduxSaga/Country/FormikCountryViewApi'
import FormikRegionViewApiRedux from './ViewReduxSaga/Region/FormikRegionViewApi'

export default function Routes() {
  return useRoutes([
    {
        path: '/',
        element :<Dashboard/>,
        children:[
            {path:'regionredux',element:<FormikRegionViewApiRedux/>},
            {path:'countryredux',element:<FormikCountryViewApiRedux/>},
        ]
    },
    {
        path:'*', element:<Navigate to='/404' replace/>
    }
  ])
}
