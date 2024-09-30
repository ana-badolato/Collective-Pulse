import Form from 'react-bootstrap/Form';


function NewsForm() {
  return (
    <div className="form">
      <form action="">
      <Form>

      <Form.Select aria-label="Select category">
      <option>Select category</option>
      <option value="1">Civics</option>
      <option value="2">Culture</option>
      <option value="3">Science</option>
      <option value="4">Lifestyle</option>
      <option value="5">Sustainability</option>
      <option value="6">Travel</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group> 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      
        <button></button>
      </Form>
      </form>
      
    </div>
  )
}

export default NewsForm