import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { DeleteData, GetData, UpdateBooks } from "../../Services/Actions/bookActions";
import './Table.css';

const TableData = () => {

    const books = useSelector(state => state.books);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleUpdate = (id) => {

        dispatch(UpdateBooks(id));
        navigate(`/UpdateData/${id}`);
        
    }

    const handleDelete = (id) => {

        dispatch(DeleteData(id));

    }

    useEffect(() => {

        dispatch(GetData());

    }, [dispatch]);

    const handleForm = () => {

      navigate('/AddData');

    }

    return(

        <>

            <div className="bg-dark-subtle header mb-5 text-center">
              <div className="d-flex justify-content-between">
              <div>
                <h1 className="font p-4">ViewData</h1>
              </div>
              <div className="cardData-add p-3 me-4">
                <div className="img-add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" onClick={handleForm}>
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                </div>
              </div>
              </div>
            </div>


            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>
                    <div>
                        <p className='font text-center mt-2'>ID</p>
                    </div>
                  </th>
                  <th>
                      <div>
                      <p className='font text-center mt-2'>BOOK TITLE</p>
                      </div>
                  </th>
                  <th>
                      <div>
                      <p className='font text-center mt-2'>AUTHOR</p>
                      </div>
                  </th>
                  <th>
                      <div>
                      <p className='font text-center mt-2'>GENERE</p>
                      </div>
                  </th>
                  <th>
                      <div>
                      <p className='font text-center mt-2'>PUBLICATION YEAR</p>
                      </div>
                  </th>
                  <th className='font text-center text p-4'>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {books.map((data) => (
                  <tr key={data.id}>
                    <td className='text-center'>{data.id}</td>
                    <td className='text-center'>{data.title}</td>
                    <td className='text-center'>{data.author}</td>
                    <td className='text-center'>{data.genre}</td>
                    <td className='text-center'>{data.publicationYear}</td>
                    <td className='text-center'>
                      <div className='d-flex justify-content-evenly'>
                        <div>
                          <Button variant="info-subtle" className='ms-1 bg-info-subtle text-info border-info'>
                            <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleUpdate(data.id)} />
                          </Button>
                        </div>
                        <div>
                          <Button variant="danger" className='ms-1 bg-danger-subtle text-danger'>
                            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(data.id)} />
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </>

    )

}

export default TableData;








