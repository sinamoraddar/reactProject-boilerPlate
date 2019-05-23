import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOG_IN',
        uid: 'asjklfadksl'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: action.uid
    })
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOG_OUT'
    };
    const state = authReducer({uid:'aksldfjlmczlx'}, action);
    expect(state).toEqual({});
});