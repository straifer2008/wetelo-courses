import React from 'react';
import {compose} from 'recompose';
import {View, ActivityIndicator} from 'react-native';
import {ThemeProvider} from "react-native-elements";
import {connect} from "react-redux";
import {registerToCoursesSubmit} from "../../state/coursesForm/operations";
import FormBuild from "../../components/formBuild/FormBuild";
import themes from "../../themes";
import s from './styles';
import Colors from "../../constants/colors";

const CoursesForm = ({navigation, registerToCoursesSubmit, loading, error}) => (
    <ThemeProvider theme={themes.dark}>
        {
            loading ? <View style={s.containerCenter}>
                <ActivityIndicator size='large' color={Colors.blue} />
            </View> : <View style={s.container}>
                <FormBuild
                    onSubmitForm={ val => registerToCoursesSubmit(val, navigation) }
                />
            </View>
        }
    </ThemeProvider>
);

CoursesForm.navigationOptions = {
    title: 'Реєстрація на курси',
};


const mapStateToProps = (state) => ({
    loading: state.registerCoursesReducer.loading,
    error: state.registerCoursesReducer.error
});

const mapDispatchToProps = ({
    registerToCoursesSubmit
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(CoursesForm);
