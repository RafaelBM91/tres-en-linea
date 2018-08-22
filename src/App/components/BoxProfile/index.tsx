import * as React from 'react';

import { Procfile } from '../../models';

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
    ButtonStandar,
    ImgGif
} from '../BoxMessage/styled';

let aux = false;

const BoxProfile = (props: Procfile): JSX.Element =>
    <Box>
        <Media>
            <MediaLeft>
                <Figure>
                    <Img src={props.srcImg} alt='avatar' />
                </Figure>
            </MediaLeft>
            <MediaRight>
                <Content>
                    <Paragraph>
                        <Strong>{props.name}</Strong>
                        <br />
                        {
                            (props.free && !aux) ?
                                <ButtonStandar>Invitar</ButtonStandar>
                            :
                                <ImgGif
                                    src="/img/jugando.gif"
                                    title={(aux) ? "Termina tu juego..." : "jugando..."}
                                    alt={(aux) ? "Termina tu juego..." : "jugando..."} />
                        }
                    </Paragraph>
                </Content>
            </MediaRight>
        </Media>
    </Box>

export { BoxProfile };
