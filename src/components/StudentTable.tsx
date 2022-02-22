import { Button, Table } from "react-bootstrap";

const StudentTable = (props: any) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fName}</td>
              <td>{student.lName}</td>
              <td>
                <Button onClick={() => props.deleteStudent(student.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentTable;
