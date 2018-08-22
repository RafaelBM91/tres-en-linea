const FnAutoScroll = (element: any, btn_arrow_message, scrollObject: any): any => {
    if (element) {
        if (!btn_arrow_message) {
            element.scrollTop = element.clientHeight * element.clientHeight;
        }
        return element.scrollTop;
    }
    return scrollObject;
}

const FnDetectScroll = (event: any, oldPosition: number, btn_arrow_message: boolean, callback: any): void => {
    if (oldPosition >= 0) {
        let scrolled = (oldPosition - event.currentTarget.scrollTop);
        scrolled = (scrolled < 0) ? 0 : scrolled;
        if ((scrolled > 0 && !btn_arrow_message) || (scrolled === 0 && btn_arrow_message) ) {
            callback();
        }
    }
}

const FnResetScroll = (flag: boolean, callback: any): void => {
    if (flag)
        callback();
}

export { FnAutoScroll, FnDetectScroll, FnResetScroll };
