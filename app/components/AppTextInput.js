import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { useFormikContext } from 'formik';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, name, ...otherProps }) {
    const { setFieldTouched, handleChange } = useFormikContext();
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                editable={true}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                style={defaultStyles.text} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    }
});

export default AppTextInput;
