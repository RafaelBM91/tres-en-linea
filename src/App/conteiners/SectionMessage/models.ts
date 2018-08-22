import { Message } from '../../models'

interface SectionMessageModel {
    list_messages: [Message];
    btn_arrow_message: boolean;
    handlerScrollMessage?: Function;
}

export { SectionMessageModel, Message };
