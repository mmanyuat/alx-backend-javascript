export default function getStudentsByLocation(Students, city) {
  return Students.filter((student) => student.location === city);
}
