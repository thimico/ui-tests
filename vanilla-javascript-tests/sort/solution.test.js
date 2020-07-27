import sort from './solution';
import data from './dataset.json';

describe('#sort', () => {
    test('empty object when there is no notifications', () => {
        const data = [];
        expect(sort(data)).toEqual({});
    });

    test('default test data is provided', () => {
        const result = {
            "Conversations": ["2019-01-01"],
            "Email": ["2019-01-02"],
            "Geo": ["2019-01-02"],
            "InAppMessage": ["2019-01-04"],
            "PushNotification": ["2019-01-02", "2019-01-03"]
        };

        expect(sort(data)).toEqual(result);
    });
})
