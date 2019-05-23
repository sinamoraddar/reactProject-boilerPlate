import { logIn, logOut } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = 'alsjkfladm';
    const action = logIn(uid)
    expect(action).toEqual({
        type: 'LOG_IN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logOut();
    expect(action).toEqual({
        type: 'LOG_OUT',
    });
});