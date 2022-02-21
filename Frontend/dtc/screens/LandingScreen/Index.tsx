import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackScreenProps } from '../../types';
export default function Index({ navigation }: RootStackScreenProps<'Landing'>) {
    useEffect(() => {
        console.log('test')
        setTimeout(()=>{
            //goto root
            navigation.replace('Root')
        }, 1000)
    })

    return (
        <div style={{'color':'white'}}>landing page</div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
