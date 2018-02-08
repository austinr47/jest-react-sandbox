const controller = require('./controller');

test('adds and inc to a val', () => {
    expect(controller.myOtherFunc(2, 4)).toBe(6);
});