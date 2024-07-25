
const intialState = {

    books: [],
    book: null,
    loading: true

}

const BooksReducer = (state = intialState, action) => {
    
    switch(action.type){

        case "GETBOOKS" : 
            return{
                ...state,
                books: action.payload,
                book: null,
                loading: false
            }

        case "UPDATEBOOKS" : 
            return{
                ...state,
                book: action.payload,
                loading: false
            }

        case "DELETEBOOKS" : 
            return{
                ...state,
                books: state.books.filter(books => books.id !== action.payload),
                loading: false
            }  
         
        default:
            return state

    }

}

export default BooksReducer;
