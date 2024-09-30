export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  const employees = [].concat(...allEmployees); // Flatten the array of arrays into a single array
  return employees[Symbol.iterator](); // Return an iterator
}
