import React, { Fragment } from 'react'
import Navbar from '../page/Navbar'
import { Route, Redirect } from 'react-router-dom'
import Footer from '../page/footer'


const Layout = props => {

    return <Fragment>
        {/* <Navbar/> */}
        {props.children}
        <Footer />

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
