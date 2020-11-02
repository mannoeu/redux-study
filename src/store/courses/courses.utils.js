import { v4 as uuidv4 } from "uuid";

export function addCourse(courses, courseItem) {
  return [...courses, { id: uuidv4(), ...courseItem }];
}

export function removeCourse(courses, id) {
  return courses.filter((course) => course.id !== id);
}
