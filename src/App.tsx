import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      fName: "Max",
      lName: "Smecker",
    },
    {
      id: 2,
      fName: "Harald",
      lName: "Eia",
    },
  ]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(students.length + 1);
  }, []);

  // create
  const addStudent = (student: any) => {
    setCounter((prevCounter) => prevCounter + 1);
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: counter,
        fName: student.fName,
        lName: student.lName,
      },
    ]);
  };

  // delete
  const deleteStudent = (id: any) => {
    setStudents((PrevStudents) =>
      PrevStudents.filter((PrevStudents) => PrevStudents.id !== id)
    );
  };

  // update
  const editStudent = (student: any) => {
    deleteStudent(student.id);
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <AddStudent addStudent={addStudent} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <EditStudent editStudent={editStudent} students={students} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <StudentTable students={students} deleteStudent={deleteStudent} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default App;
