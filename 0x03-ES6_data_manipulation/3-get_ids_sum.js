export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const sum = students.reduce((accumulator, student) => {
    if (student && typeof student.id === 'number') {
      return accumulator + student.id;
    }
    return accumulator;
  }, 0);
  return sum;
}
