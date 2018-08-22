import * as React from 'react';
import { connect } from 'react-redux';

import { StateModel } from '../../models';

import { handlerScrollMessage } from '../../store/actions';

import { SectionMessage } from '../../components/SectionMessage';

import { SectionMessageModel } from './models';

const WithProps = (state: StateModel): SectionMessageModel =>
    ({
        list_messages: state.list_messages,
        btn_arrow_message: state.btn_arrow_message
    });

const WithDispatch = dispatch =>
    ({
        handlerScrollMessage: () => dispatch( handlerScrollMessage() )
    });

const WithSectionMessage = connect(
    WithProps,
    WithDispatch
)(SectionMessage);

export { WithSectionMessage };
