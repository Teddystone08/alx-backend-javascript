import Classroom from "./0-classroom.js";
/**
 * create an array class of @linked Classroom with size
 * @return: anarray of @linked Classroom
 */

export default function initializeRooms() {
	const Csizes = [9, 20, 34];
	return Csizes.map(size => new ClassRoom(size));
}
