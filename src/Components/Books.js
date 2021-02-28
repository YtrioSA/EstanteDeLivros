import React     from 'react'
import Book      from '../Components/Book'
import ListBooks from '../Data/ListBooks'

const books = _ => {
    const listBooks = ListBooks.map((book) => {
        return (
            <Book id={book.id} title={book.title} />
        )
    })
    return (
       <ul>
           { listBooks }
       </ul> 
    )
}

export default books
