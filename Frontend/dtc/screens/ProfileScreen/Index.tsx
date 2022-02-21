import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../../types';

export default function Index({ navigation }: RootTabScreenProps<'Profile'>) {
    return (
        <div style={{'color':'white'}}>Profile page</div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
