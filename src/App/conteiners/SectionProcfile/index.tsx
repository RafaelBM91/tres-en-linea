import * as React from 'react';
import { connect } from 'react-redux';

import { StateModel } from '../../models';

import { SectionProfile } from '../../components/SectionProfile';   

import { SectionProcfileModel } from './models';

const WithProps = (state: StateModel): SectionProcfileModel =>
    ({
        list_procfile: state.list_procfile,
    });

// const WithDispatch = dispatch =>
//     ({
//         handlerScrollMessage: () => dispatch( handlerScrollMessage() )
//     });

const WithSectionProfile = connect(
    WithProps,
    null // WithDispatch
)(SectionProfile);

export { WithSectionProfile };
