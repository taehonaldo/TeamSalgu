import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../../types';

export default function Index({ navigation }: RootTabScreenProps<'Chat'>) {
    return (
        <div style={{'color':'white'}}>Chatroom page</div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
