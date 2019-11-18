import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { P, Text2, Text3 } from './ui/text-default-styled';
import { Header } from './Header';
import { Footer } from './Footer';
import { InfoBlock } from './InfoBlock';
import { AppState } from '../store';
import { ButtonLink } from './ui/ButtonLink';
import { Title } from './Title';

const Block = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 3px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  max-width: 245px;
  align-self: stretch;
  min-height: 500px;
`;

const ButtonLinkStyled = styled(ButtonLink)`
  margin: 15px auto;
`;

const Description = styled(Text3)`
  margin: 15px 30px 0 30px;
`;

const Value = styled(Text2)`
  margin: 2px 30px 0 30px;
`;

interface Props {
  user?: string;
  email?: string;
  url?: string;
}

@(connect(mapStateToProps, null) as any)
export class ScreenConfirmation extends React.Component<Props> {
  render() {
    const { url, user, email } = this.props;

    return (
      <Block>
        <Header />

        <Main>
          <InfoBlock />
          <ColumnTwo>
            <Title />
            <P>Проверьте введеные вами данные и перейдите к следующему шагу</P>
            <Description>Ссылка на ваш аккаунт</Description>
            <Value>{url}</Value>
            <Description>Имя и фамилия</Description>
            <Value>{user}</Value>
            <Description>Эл. Адрес</Description>
            <Value>{email}</Value>

            <ButtonLinkStyled to={'/congratulation'}>Далее</ButtonLinkStyled>
          </ColumnTwo>
        </Main>
        <Footer />
      </Block>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    user: state.common.user,
    url: state.common.url,
    email: state.common.email,
  };
}
