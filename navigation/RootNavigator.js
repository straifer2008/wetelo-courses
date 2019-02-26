import React from 'react';
import {compose} from 'recompose';
import AppNavigator from "./AppNavigator";
import {connect} from "react-redux";
import HomeNavigator from "./HomeNavigator";

const RootNavigator = ({userIsLogged}) => (
    <>
        {
            userIsLogged ? <HomeNavigator/> : <AppNavigator />
        }
    </>
);

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const enhance = compose(
    connect(mapStateToProps)
);

export default enhance(RootNavigator);