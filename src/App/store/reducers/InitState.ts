import { StateModel, Message, Procfile } from '../../models';

const procfile = {
    srcImg: 'https://bulma.io/images/placeholders/128x128.png',
    name: 'Rafael Briceño',
    date: '31m',
    message: 'holaaaaaaaaaaaaaaa',
    free: true
};

const procfilex = {
    srcImg: 'https://bulma.io/images/placeholders/128x128.png',
    name: 'Rafael Briceño',
    free: false
};

const message: Message = {
    name: 'Rafael Briceño',
    date: '31m',
    message: 'holaaaaaaaaaaaaaaa'
};

const messages: Array<Message> = [message, message, message, message, message, message, message, message, message ];

const procfiles: Array<Procfile> = [ procfile, procfilex, procfilex, procfile, procfilex, procfile, procfile, procfilex, procfile ]

const NewState: any = { list_messages: messages, list_procfile: procfiles, btn_arrow_message: false }

export { NewState };
