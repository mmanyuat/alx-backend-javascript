export default function getListStudentIds(listStudents){
  if(!Array.isArray(listStudents)){
    return [];
  } else
  {
   return listStudents.map(Students => Students.id);
  }
}
