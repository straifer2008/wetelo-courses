import React from 'react';
import {compose} from 'recompose';
import FormBuild from "../../components/formBuild/FormBuild";
import themes from "../../themes";
import {ThemeProvider} from "react-native-elements";
import s from './styles';

const CoursesForm = () => (
    <ThemeProvider theme={themes.dark}>
        <FormBuild/>
    </ThemeProvider>
);

CoursesForm.navigationOptions = {
    title: 'Реєстрація на курси',
};

const enhance = compose();
export default enhance(CoursesForm);
