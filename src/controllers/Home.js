import React, { Component, Fragment } from 'react';
import Product from "./Product";

class Home extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Fragment>
                <Product />
            </Fragment >
        )
    }
}

export default Home;