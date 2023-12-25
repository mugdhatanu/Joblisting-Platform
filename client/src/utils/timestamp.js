const getTime = (timestamp) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMins = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const seconds = date.getSeconds();

    if(currentYear - year > 0) {
        return `${currentYear - year}y`
    }
    if(currentMonth - month > 0) {
        return `${currentMonth - month}m`
    }
    if(currentDay - day > 28) {
        return `4w`
    }
    if(currentDay - day > 21) {
        return `3w`
    }
    if(currentDay - day > 14) {
        return `2w`
    }
    if(currentDay - day > 7) {
        return `1w`
    }
    if(currentDay - day > 0) {
        return `${currentDay - day}d`
    }
    if(currentHours - hours > 0) {
        return `${currentHours - hours}h`
    }
    if(currentMins - mins > 0) {
        return `${currentMins - mins}min`
    }
    if(currentSeconds - seconds > 0) {
        return `${currentSeconds - seconds}s`
    }

}

export default getTime;