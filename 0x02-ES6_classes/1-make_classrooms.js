import Classroom from "./0-classroom.js";

export default function initializeRooms() {
    const rooms = [
        new Classroom(10),
        new Classroom(15),
        new Classroom(20)
    ];
    return rooms;
}