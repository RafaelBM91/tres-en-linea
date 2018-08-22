import * as React from 'react';

import { Message } from '../../models';

import {
    Box,
    Media,
    MediaLeft,
    MediaRight,
    Figure,
    Img,
    Content,
    Paragraph,
    Strong,
    Small
} from './styled';

const BoxMessage = (props: Message): JSX.Element =>
    <Content>
        <Paragraph>
            <Strong>{props.name}</Strong>
            &nbsp;&nbsp;
            <Small>{props.date}</Small>
            <br />
            {props.message}
        </Paragraph>
    </Content>

export { BoxMessage };
