export const MONTHS = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
]

export function getTime(hours: number, minutes: number): string {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    return hours.toString() + ':' + strMinutes + ' ' + ampm;
}

export function dateToString(): string {
    const dateNow = new Date();
    const month = MONTHS[dateNow.getMonth()];
    const day = dateNow.getDate();
    const time = getTime(dateNow.getHours(), dateNow.getMinutes());
    return month + ' ' + day + ' at ' + time;
}