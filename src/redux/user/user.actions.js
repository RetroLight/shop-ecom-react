export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        payloads: user
    }
}