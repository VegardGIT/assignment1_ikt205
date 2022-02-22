import { Button, Form } from "react-bootstrap";

const AddStudent = (props: any) => {
  const handleAddSubmit = (event: any) => {
    event.preventDefault();
    props.addStudent({
      fName: event.target.fName.value,
      lName: event.target.lName.value,
    });
  };

  return (
    <Form onSubmit={handleAddSubmit}>
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
      <Button type="submit">Add student</Button>
    </Form>
  );
};

export default AddStudent;
