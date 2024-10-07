function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const gradesMap = new Map();
  newGrades.forEach((gradeObj) => {
    gradesMap.set(gradeObj.studentId, gradeObj.grade);
  });

  const updatedStudents = filteredStudents.map((student) => ({
    ...student,
    grade: gradesMap.has(student.id) ? gradesMap.get(student.id) : 'N/A',
  }));

  return updatedStudents;
}

export default updateStudentGradeByCity;
