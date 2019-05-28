import React from 'react';

import {
  Container, Title, Description, File,
} from './styles';

const Main = () => (
  <Container>
    <Title>Welcome to the Basic Reiler-Native Boilerplate!</Title>
    <Description>This is the screen where everything will start in your application =)</Description>
    <Description>To edit this screen, access the file:</Description>
    <File>src/pages/Main/index.js</File>
  </Container>
);

export default Main;
