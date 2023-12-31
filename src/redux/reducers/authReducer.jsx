const initialState = {
    isAuthenticated: false,
    token: null,
    adminToken: null,
    userId: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                adminToken: action.payload.adminToken,
                userId: action.payload.userId
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                adminToken: null,
                userId: null
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                adminToken: null,
                userId: null
            };
        default:
            return state;
    }
};

export default authReducer;