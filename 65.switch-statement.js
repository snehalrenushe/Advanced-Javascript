// Switch

let monthIndex = new Date().getMonth();

switch (monthIndex) {
    case 0:
        console.log("Jan");
        break;
    case 1:
        console.log("Feb");
        break;
    case 2:
        console.log("Mar");
        break;
    case 3:
        console.log("Apr");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("Jun");
        break;
    case 6:
        console.log("Jul");
        break;

    default:
        console.log("Invalid month");
        break;
}