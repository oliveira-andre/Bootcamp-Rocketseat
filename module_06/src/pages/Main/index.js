import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handleSubmit() = () => {
    const { users, newUser } = this.state;
    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
  }

  render() {
    const { users, newUSer } = this.state;

    return (
      <>
        <Container>
          <Form>
            <Input
              autoCorrect={ false }
              autoCapitalize='none'
              placeholder='Adicionar usuário'
              value={newUser}
              onChangeText={ text => setState({ newUser: text }) }
              returnKeyType='send' 
              onSubmitEditing={ this.handleSubmit }
            />
            <SubmitButton onPress={ this.handleSubmit }>
              <Icon name='add' size={20} color='#FFF' />
            </SubmitButton>
          </Form>
        </Container>
      </>
    );
  };
};

