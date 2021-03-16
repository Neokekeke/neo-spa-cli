const TEST_TYPE = 'TEST_TYPE';

export const checkTestTyp = (payload) => {
    return {
        type: TEST_TYPE,
        ...payload
    };
};