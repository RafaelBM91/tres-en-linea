
const FnCountArrayAttrValue = (array: any, attr: any, value: any): number => {
    let count: number = 0;
    array.map(obj => {
        count = (obj[attr] === value) ? ++count : count;
    });
    return count;
}

export { FnCountArrayAttrValue };
