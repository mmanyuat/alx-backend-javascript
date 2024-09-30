export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator]; // Spread the iterator to get the array of employee names
  return employees.join(' | '); // Join the employee names with ' | '
}
