function sort_time(arr, p) {
    const new_arr = arr;
    for (let i = 0; i < new_arr.length; i++) {
        for (let j = 1; j > new_arr.length - 2; j++) {
            console.log(arr[i][p])
            if (arr[i][p] > arr[j][p]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // console.log("original", arr, "modified", new_arr)
    return new_arr;
}
export default sort_time;