function last_login_check(old_time, new_time) {
    const decrement = Math.abs(old_time - new_time);
    if (old_time === new_time) {
        localStorage.setItem("LL", JSON.stringify(old_time));
        return false
    }
    else if (decrement > 1 * 60 * 60 * 1000) {
        localStorage.setItem("LL", JSON.stringify(new_time));
        return true;
    }
    return false;
}
export default last_login_check;