const initState = {
    user: [
        { id: 1, name: 'Hoang' },
        { id: 2, name: 'Hoang Nam' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // console.log('run into delete user', action);
            let user = state.user.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                user
            }
        case 'CREATE_USER':
            // console.log('run into create user', action);
            let id = Math.floor(Math.random() * 10000);

            let userCreate = {
                id: id,
                name: `random ${id}`
            }
            return {
                ...state,
                user: [...state.user, userCreate]
            }

        default:
            return state;
    }
}

export default rootReducer