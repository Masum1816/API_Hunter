import { useNavigate } from 'react-router';
import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    const handleForm = () => {

        navigate('/AddData');

    }

    const handleView = () => {

        navigate('/TableData');

    }

    return(

        <>
            <div className="background bg-dark-subtle p-4">
                <h1 className='font text-center'>Library Management System</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-2 mt-5">
                        <div className="cardData p-4">
                            <div className="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16" onClick={handleForm}>
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                            </div>
                            <h4 className='font text-center pt-3'>Add Data</h4>
                        </div>
                    </div>
                    <div className="col-2 mt-5">
                        <div className="cardData p-4">
                            <div className="img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" onClick={handleView}>
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                </svg>
                            </div>
                            <h4 className='font text-center pt-3'>View Data</h4>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>

    )
    
}

export default Home;








