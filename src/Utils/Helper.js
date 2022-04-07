export const transformResult = person => {
    Object.keys(person).forEach(key => {
        if (person[key] == '' || person[key] == []) {
            delete person[key];
        }else if(key === 'url'){
            delete person[key];
        }
        });
    return person
}