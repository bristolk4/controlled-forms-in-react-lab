import { useState } from 'react';

const Bookshelf = () => {
    //adding comments for once. this stores a new book
    const [newBook, setNewBook] = useState([{
        title: '',
        author: '' 
        }]);
    //stores all books
    const [books, setBooks] = useState([])
    //arrow function that handles when you type new text in the input for new book
    //event means when something changes in the browser
    const handleInputChange = (event) => {
        //event.target is the change going on in the input
        //name is set into the new books list. name is either title or author
        const {name, value} = event.target
        //updates new book list using a copy of the initial book list
        //'...' is spread operator!! is keeps the existing 'prevBook' list intact
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }))
    }
    //handles when you submit a new book after typing it in.
    //adds new book to list of all books and clears input
    const handleSubmit = (event) => {
        event.preventDefault() //I had to use chatGPT a little bit here
        setBooks((prevBooks) => [...prevBooks, newBook])
        setNewBook({
            title: '',
            author: ''
        })
    }
    //this is what shows up on the page (RETURN TO ME-> BLAHBLAHBLAH) 
    return (
    // whole "bookshelf" div beginning
    <div className="bookshelfDiv">
    <div className="formDiv">
        <h3>Add a Book</h3>
        {/* add book form: */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBook.title}
                    //updates as you type like in the "firstname" "lastname" in the lecture
                    onChange={handleInputChange}
                />
            </div>
            <div>
            <label htmlFor="author">Author: </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={newBook.author}
                    //same here
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
        {/* end add book form */}
    </div>
    {/* final book list div beginning */}
    <div className="bookCardsDiv">
        <h2>Books</h2>
        {books.map((book, index) => (
            // single book
            <div key={index} className="bookCard">
                <p>{book.title}</p>
                <p>{book.author}</p>
            </div>
        ))}
    </div>
    {/* final book list div end */}
    </div>
    // whole "bookshelf" div end 
    )
}


export default Bookshelf