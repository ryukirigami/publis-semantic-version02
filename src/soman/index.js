const soman = (date) => {
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}

module.exports = {
    soman
}