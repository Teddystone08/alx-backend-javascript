import Classroom from "./0-classroom.js";
/**
 * create an array class of @linked Classroom with size
 * @return: anarray of @linked Classroom
 */

import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
