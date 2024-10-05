import Classroom from "./0-classroom.js";
/**
 * create an array class of @linked Classroom with size
 * @return: anarray of @linked Classroom
 */

export default function initializeRooms() {
    const rooms = [
        new Classroom(10),
        new Classroom(15),
        new Classroom(20)
    ];
    return rooms;
}
