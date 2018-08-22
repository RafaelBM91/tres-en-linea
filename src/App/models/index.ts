enum Actions {
    EVENT_SCROLL_MESSAGE = 'EVENT_SCROLL_MESSAGE',
    ALERT_NEW_MSJS = 'ALERT_NEW_MSJS',
    ALERT_REFRESH_PROCFILE = 'ALERT_REFRESH_PROCFILE'
}

interface StateModel {
    list_messages?: [Message];
    list_procfile?: [Procfile];
    btn_arrow_message?: boolean;
}

interface ActionModel extends StateModel {
    type: string;
    message: Message;
}

interface Message {
    name: string;
    message: string;
    date: string;
}

interface Procfile {
    srcImg: string;
    name: string;
    free: boolean;
}

export { Actions, ActionModel, StateModel, Message, Procfile };
