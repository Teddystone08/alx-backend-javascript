import Classroom from "./0-classroom.js";
/**
 * create an array class of @linked Classroom with size
 * @return: anarray of @linked Classroom
 */

export default function initializeRooms() {
    return [19, 20, 34].map((size) => new Classreom(size))
}
