
const setLocalStorageValue = (key,value) => {
    const {exp} = JSON.parse(window.atob(value.split('.')[1]));
    const item = {
        token: value,
        expiry: new Date(exp*1000)
    }
    localStorage.setItem(key,JSON.stringify(item));
}

export default setLocalStorageValue