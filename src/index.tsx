import * as React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Reducers } from './App/store/reducers';

import { App } from './App/app';

const store = createStore( Reducers, applyMiddleware( thunk ) );

hydrate(
    <Provider store={ store }>
        <App  />
    </Provider>,
    document.getElementById('app')
);
