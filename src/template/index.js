import React, { Fragment } from 'react'
import Navbar from '../page/Navbar'
import { Route, Redirect } from 'react-router-dom'


const Layout = props => {

    return <Fragment>
        {props.children}


    </Fragment>


}



export default function Template({ Component, ...props }) {
    return <Route
        {...props}
        render={propsComponent => {
            return <Layout>
                <Component {...propsComponent} />
            </Layout>


        }}








    />

}
