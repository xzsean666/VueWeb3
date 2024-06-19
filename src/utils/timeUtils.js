function CT(timestamp) {
    const date = new Date(timestamp)
    let res = {}
    res["YY"] = (date.getFullYear()).toString();
    res["MM"] = (date.getMonth() + 1).toString();
    res["DD"] = (date.getDate()).toString();
    res["HH"] = date.getHours();
    res["MS"] = date.getMinutes();
    res["SS"] = date.getSeconds();
    return res
}

function createDayList(startDay, endDay) {
    let list = []
    let tempDay = startDay

    while (tempDay < endDay) {
        let time = CT(tempDay)
        list.push((time["YY"] + "-" + time["MM"] + "-" + time["DD"]).toString())
        tempDay = tempDay + 86400000
    }
    return list
}

export {
    CT,
    createDayList
}