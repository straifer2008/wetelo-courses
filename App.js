import React from 'react';
import { compose } from "recompose";
import store from "./store";
import { Provider} from "react-redux";
import RootNavigator from "./navigation/RootNavigator";


const App = () => (
    <Provider store={store}>
        <RootNavigator/>
    </Provider>
);

const enhance = compose();
export default enhance(App);