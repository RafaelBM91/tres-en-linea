import { Actions, StateModel, ActionModel } from '../../models';

import { NewState } from './InitState';

const Reducers = (state: StateModel, action: ActionModel) => {
    let newState: any = {...(state) ? state : NewState };
    switch (action.type) {
        case Actions.ALERT_NEW_MSJS:
            newState.list_messages.push(action.message);
        break;
        case Actions.EVENT_SCROLL_MESSAGE:
            newState.btn_arrow_message = action.btn_arrow_message;
        break;
        case Actions.ALERT_REFRESH_PROCFILE:
            newState.list_procfile = action.list_procfile;
        break;
    }
    return newState;
}

export { Reducers };
