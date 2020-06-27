export interface State {
    posts: Post[];
    users: User[];
    postsVisible: boolean;
    currentUser: User;
}

export interface Post {
    _id: string;
    content: string;
    userID: string;
    likes: number;
    dislikes: number;
    comments: string[];
    commentsVisible: boolean;
    date: string;
}

export interface User {
    _id: string;
    name: string;
}

export const MONTHS = [
    "January","February","March","April","May","June","July",
    "August","September","October","November","December"
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