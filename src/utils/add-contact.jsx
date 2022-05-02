function addContactFn(allContacts, contact) {
    const addCont = allContacts.some(
        ({name, number}) =>
        name.toLowerCase() === contact.name.toLowerCase() ||
        number === contact.number,
    );

    if (addCont) {
        alert(`${contact.name} is allready in contacts`);
        return allContacts
    }
    return [...allContacts, contact];
}

export default addContactFn;