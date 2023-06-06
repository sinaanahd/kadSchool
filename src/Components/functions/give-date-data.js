import find_month from "./find-month";
function give_date_data(month) {
    const data = {
        arr: [],
        name: "",
        years: [],
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
    }
    if (month < 7) {
        for (let i = 1; i <= 31; i++) {
            data.arr.push(i);
        }
    }
    else {
        for (let i = 1; i <= 30; i++) {
            data.arr.push(i);
        }
    }
    for (let j = 1360; j < 1390; j++) {
        data.years.push(j);
    }
    // switch (month) {
    //     case 1:
    //         data.name = "فروردین";
    //         break;
    //     case 2:
    //         data.name = "اردیبهشت";
    //         break;
    //     case 3:
    //         data.name = "خرداد";
    //         break;
    //     case 4:
    //         data.name = "تیر";
    //         break;
    //     case 5:
    //         data.name = "مرداد";
    //         break;
    //     case 6:
    //         data.name = "شهریور";
    //         break;
    //     case 7:
    //         data.name = "مهر";
    //         break;
    //     case 8:
    //         data.name = "آبان";
    //         break;
    //     case 9:
    //         data.name = "آذر";
    //         break;
    //     case 10:
    //         data.name = "دی";
    //         break;
    //     case 11:
    //         data.name = "بهمن";
    //         break;
    //     case 12:
    //         data.name = "اسفند";
    //         break;
    // }
    data.name = find_month(month);
    return data;
}
export default give_date_data;