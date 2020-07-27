var _ = require('lodash');

const sort = (list) => {
    var resultFim = {};

    const channels = _.uniq(list.map(l => l.channel ));

    for (const property in channels) {

        var reducedUsers = _.reduce(list, function (result, notification) {
            if(notification.channel == channels[property]) {
                (result[channels[property]] || (result[channels[property]] = [])).push(notification.startDate);
            }

            return result;
        }, {});
        var xxx = _.chain(reducedUsers).countBy().toPairs().max(_.last).head().value();
        const mostPopular = frequentlyItems(xxx.split(','));
        resultFim[channels[property]] = mostPopular
    }
    return resultFim
}

const frequentlyItems = (list) => {
    let listMap = new Map()
    let res = [];
    for (let i of list) {
        listMap.set(i, (listMap.get(i) || 0) + 1);
    }

    const maximum = Math.max(...Array.from(listMap.values()));

    for (let [item, qty] of listMap.entries()) {
        if (qty === maximum) {
            res = [...res, item];
        }
    }

    return res;
}

export default sort;