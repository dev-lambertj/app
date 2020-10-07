import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import R from '../res/R';

interface HomeProps {
    logout: () => void
}

export default class Home extends React.Component<HomeProps> {
    render() {
        return (
            <>
                <Text>Bienvenue, vous êtes actuellement connecté.</Text>
                <Button title={R.I18n.t('logout')} onPress={this.props.logout} />
            </>
        );
    }
}
