import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import R from '../res/R';

interface LoginProps {
    login: () => void
}

export default class Login extends React.Component<LoginProps> {
    render() {
        return (
            <>
                <Text>Bonjour, cliquez ci-dessous pour vous connecter :</Text>
                <Button title={R.I18n.t('login')} onPress={this.props.login} />
            </>
        );
    }
}
