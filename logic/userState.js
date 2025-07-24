
/** @type {User} */
export const userState = {
    name: "Anonymous",
    record: 0,
    soundtrack: 1
};

export function resetState() {
    userState.name = "Anonymous";
    userState.record = 0;
    userState.soundtrack = 0;
}
