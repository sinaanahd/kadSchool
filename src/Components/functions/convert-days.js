function convert_days(day) {
    switch (day) {
        case "Saturday":
            return "شنبه";
        case "Sunday":
            return "یک‌شنبه";
        case "Monday":
            return "دوشنبه";
        case "Tuesday":
            return "سه‌شنبه";
        case "Wednesday":
            return "چهارشنبه";
        case "Thursday":
            return "پنج‌شنبه";
        case "Friday":
            return "جمعه";
    }
}
export default convert_days;