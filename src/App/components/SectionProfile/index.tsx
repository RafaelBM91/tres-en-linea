import * as React from 'react';

import {
    SectionRight,
    HeaderSectionList,
    ContentListRight,
    List
} from '../Main/styled';

import { BoxProfile } from '../BoxProfile';

import { SectionProcfileModel, Procfile } from '../../conteiners/SectionProcfile/models';

import { FnCountArrayAttrValue } from '../../helpers/counts';

const SectionProfile: React.SFC<SectionProcfileModel> = (props) =>
    <SectionRight>
        <HeaderSectionList>
            <div>jugando: { (props.list_procfile.length > 0) ? `(${FnCountArrayAttrValue(props.list_procfile, 'free', false)})` : null }</div>
            <div>Libre: { (props.list_procfile.length > 0) ? `(${FnCountArrayAttrValue(props.list_procfile, 'free', true)})` : null }</div>
            <div>Total: { (props.list_procfile.length > 0) ? `(${props.list_procfile.length})` : null }</div>
            </HeaderSectionList>
        <ContentListRight>
            <List>
                {
                    props.list_procfile.map((procfile: Procfile, id: number) => <BoxProfile key={id} {...procfile} /> )
                }
            </List>
        </ContentListRight>
    </SectionRight>

export { SectionProfile };
