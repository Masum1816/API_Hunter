import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { PostData } from "../../Services/Actions/bookActions";

const AddData = () => {

    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        publicationYear: '',
    });

    const handleInput = (event) => {

        const { name, value } = event.target;

        setData({ ...data, [name]: value });
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch(PostData(data));

        setIsSubmit(true);

        setData({
            id: '',
            title: '',
            author: '',
            genre: '',
            publicationYear: '',
        });

        console.log("Data", data);

    }

    useEffect(() => {
        if (isSubmit) {
            navigate('/TableData');
        }
    }, [isSubmit, navigate]);

    return(

        <>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className='mb-4 text-center font mt-4'>Add Data</h1>
                <div className="card p-5 bg-dark-subtle">

              <Form onSubmit={handleSubmit}>
                  <Form.Control type="text" name='id' value={data.id} onChange={handleInput} hidden/>
                  <Form.Group controlId="fname" className='mt-3'>
                    <div className="d-flex">
                      <Form.Label className='mt-1 font fs-4'>Book Title </Form.Label>
                      <Form.Control type="text" className='w-100 ms-3' name='title' value={data.title} onChange={handleInput}/>
                    </div>
                  </Form.Group>
                  <Form.Group className="w-100 mt-3" controlId="lname">
                    <div className="d-flex">
                      <Form.Label className='mt-1 font fs-4'>Author </Form.Label>
                      <Form.Control type="text" className='w-100 ms-3' name='author' value={data.author} onChange={handleInput}/>
                    </div>
                  </Form.Group>
                  <Form.Group className="w-100 mt-3" controlId="mail">
                    <div className="d-flex">
                      <Form.Label className='mt-1 mail font fs-4'>Genre </Form.Label>
                      <Form.Control type="text" className='w-100 ms-4 ms-3' name='genre' value={data.genre} onChange={handleInput}/>
                    </div>
                  </Form.Group>
                  <Form.Group className="w-100 mt-3" controlId="category">
                    <div className="d-flex">
                      <Form.Label className='mt-1 category font fs-4'>Publication Year </Form.Label>
                      <Form.Control type="number" className='w-100 ms-3' name='publicationYear' value={data.publicationYear} onChange={handleInput}/>
                    </div>
                  </Form.Group>
                  <div className="submit">
                    <Button type="submit" className='bg-danger mt-5 submitButton'>Submit</Button>
                  </div>
                </Form>
                </div>
              </div>
            </div>
          </div>
            </>

        )

    }

export default AddData;








