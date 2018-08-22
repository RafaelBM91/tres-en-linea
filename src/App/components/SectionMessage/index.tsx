import * as React from 'react';

import {
    SectionLeft,
    ContentListLeft,
    List,
    HeaderSectionChat,
    BtnArrowGeneral
} from '../Main/styled';

import {
    WrapperFlex,
    WrapperTextArea,
    TextArea,
    WrapperButton,
    Button
} from '../BoxMessage/styled';

import { BoxMessage } from '../BoxMessage';

import { FnAutoScroll, FnDetectScroll, FnResetScroll } from '../../helpers/scroll';

import { SectionMessageModel, Message } from '../../conteiners/SectionMessage/models';

const SectionMessage: React.SFC<SectionMessageModel> = (props) => {
    let scrollObject: any = -1;
    return (<SectionLeft>
        <HeaderSectionChat>
            <div>
                Mensajes { (props.list_messages.length > 0) ? `(${props.list_messages.length})` : null }
            </div>
            <BtnArrowGeneral
                flag={props.btn_arrow_message}
                onClick={() => FnResetScroll(props.btn_arrow_message, props.handlerScrollMessage)} />
        </HeaderSectionChat>
        <ContentListLeft 
            innerRef={(that: any) => { scrollObject = FnAutoScroll(that, props.btn_arrow_message, scrollObject) }} 
            onScroll={(event: any) => {FnDetectScroll(event, scrollObject, props.btn_arrow_message, props.handlerScrollMessage)}}>
            <List>
                {
                    props.list_messages.map((message: Message, id: number) =>  <BoxMessage key={id} {...message} /> )
                }
            </List>
        </ContentListLeft>
        <WrapperFlex>
            <WrapperTextArea>
                <TextArea></TextArea>
            </WrapperTextArea>
            <WrapperButton>
                <Button onClick={null}>Enviar</Button>
            </WrapperButton>
        </WrapperFlex>
    </SectionLeft>);
}
export { SectionMessage };
