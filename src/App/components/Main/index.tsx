import * as React from 'react';

import {
    ContentMain,
    CentralSection,
    List
} from './styled';

import { WithSectionMessage } from '../../conteiners/SectionMessage';

import { WithSectionProfile } from '../../conteiners/SectionProcfile';

import { Tablet } from '../Tablet';

import { InfoGame } from '../InfoGame';

const Main: React.SFC<{}> = () =>
    <ContentMain>
        <WithSectionMessage />
        <CentralSection>
            <InfoGame />
            <Tablet />
        </CentralSection>
        <WithSectionProfile />
    </ContentMain>

export { Main };
