import axios from "axios";
import generateUniqueId from "generate-unique-id";

export const GetBooks = (data) => {

    return{
        type: "GETBOOKS",
        payload: data
    }

}

export const UpdateBooks = (data) => {

    return{
        type: "UPDATEBOOKS",
        payload: data
    }

}

export const DeleteBooks = (id) => {

    return{
        type: "DELETEBOOKS",
        payload: id
    }

}

export const GetData = () => {

    return dispatch => {

        axios.get('http://localhost:3000/Books').then((res) => {
            console.log("Data : ",res.data);
            dispatch(GetBooks(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const PostData = (data) => {

    return dispatch => {

        data.id = generateUniqueId({
            length: 4,
            useLetters: false,
        });

        axios.post('http://localhost:3000/Books', data).then((res) => {
            console.log("Data : ",res.data);
            dispatch(GetData());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const SingleRecordData = (id) => {

    return dispatch => {

        axios.get(`http://localhost:3000/Books/${id}`).then((res) => {
            console.log("Data : ",res.data);
            dispatch(UpdateBooks(res.data));
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const UpdatedData = (data) => {

    return dispatch => {

        axios.put(`http://localhost:3000/Books/${data.id}`, data).then((res) => {
            console.log("Data : ",res.data);
            dispatch(GetData());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}

export const DeleteData = (id) => {

    return dispatch => {

        axios.delete(`http://localhost:3000/Books/${id}`).then((res) => {
            console.log("Data : ",res.data);
            dispatch(DeleteBooks(res.data));
            dispatch(GetData());
        }).catch((err) => {
            console.log("ERR : ", err);
        })

    }

}










