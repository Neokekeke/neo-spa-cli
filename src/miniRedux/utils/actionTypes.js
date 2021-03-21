// 初始化state的一些action

const randomString = () =>
    Math.random()
        .toString(36)
        .substring(7)
        .split('')
        .join('.');

const ACTION_TYPES = {
    INIT: 'MINI_REDUX_INIT' + randomString()
};

export default ACTION_TYPES;