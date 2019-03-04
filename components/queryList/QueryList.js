import React from  'react';
import {View} from 'react-native';
import {ListItem} from "react-native-elements";
import {compose} from 'recompose';
import Colors from "../../constants/colors";


const QueryList = ({query}) => (
    <View>

        { query ?
            query.map((user, i) => (
                <ListItem
                    key={i}
                    titleStyle={{color: Colors.blue}}
                    subtitleStyle={{color: Colors.grey, fontSize: 12}}
                    title={user.email}
                    subtitle={user.firstName}
                />
            )) : null
        }
    </View>
);

const enhance = compose();
export default enhance(QueryList);