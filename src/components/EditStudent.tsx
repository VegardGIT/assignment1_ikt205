import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditStudent = (props: any) => {
  const [editResponse, setEditResponse] = useState(
    "pick an id from menu to edit"
  );

  const [selectedId, setSelectedId] = useState(0);

  const handleEditById = (event: any) => {
    //console.log(event.target.value);
    setSelectedId(event.target.value);
    setEditResponse("pick an id from menu to edit");
  };

  const handleEditSubmit = (event: any) => {
    event.preventDefault();

    if (props.students.length == 0) {
      setEditResponse(
        "the list of students is empty. Please add some more before trying to edit."
      );
      return;
    }

    const id = Number(selectedId);

    props.editStudent({
      id: id,
      fName: event.target.fName.value,
      lName: event.target.lName.value,
    });

    setEditResponse("You succesfully edited the student with id = " + id);
  };

  return (
    <>
      <select
        onChange={handleEditById}
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        defaultValue={selectedId}
      >
        {props.students.map((student: any) => (
          <option key={student.id} value={student.id}>
            {student.id}
          </option>
        ))}
      </select>
      <Form onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label column sm="2">
            First Name
          </Form.Label>
          <Form.Control name="fName" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label column sm="2">
            Last Name
          </Form.Label>
          <Form.Control name="lName" placeholder="Last Name" />
        </Form.Group>
        <Button type="submit">Edit student</Button>
      </Form>
      <p>{editResponse}</p>
    </>
  );
};

export default EditStudent;
