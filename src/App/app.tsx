import * as React from 'react';

import { Header } from './components/Header';

import { Main } from './components/Main';

import { Content } from './styled';

const App = () => {
    return (
        <Content>
            <Header />
            <Main />
        </Content>
    );
};

export { App };
