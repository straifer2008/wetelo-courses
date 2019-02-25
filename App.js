import React from 'react';
import { compose } from "recompose";
import store from "./store";
import { Provider} from "react-redux";
import AppNavigator from "./navigation/AppNavigator";


const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);

const enhance = compose();
export default enhance(App);