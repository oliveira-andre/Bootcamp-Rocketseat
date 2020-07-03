import React from 'react';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <>
      <Container>
        <Form>
          <Input
            autoCorrect={ false }
            autoCapitalize='none'
            placeholder='Adicionar usuário'
          />
          <SubmitButton>
            <Icon name='add' size={20} color='#FFF' />
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
};

