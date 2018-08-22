
import { Actions } from '../../models';

const Initialize = (): Function =>
    (dispatch, getState): void => {
        // dispatch({ list_procfile: new_list_procfile , type: Actions.ALERT_REFRESH_PROCFILE });
    }

const handlerScrollMessage = (): Function => 
    (dispatch, getState): void => {
        let { btn_arrow_message } = getState();
        dispatch({ btn_arrow_message: !btn_arrow_message, type: Actions.EVENT_SCROLL_MESSAGE });
    }

export { Initialize, handlerScrollMessage };
