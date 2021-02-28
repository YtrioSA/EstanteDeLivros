import React                        from 'react'
import { GlobalStyle, Info }        from '../Styles/Styles'
import { useParams }                from 'react-router-dom'
import ListBooks                    from '../Data/ListBooks'    
import Book                         from '../Components/Book'

const BookDetail = _ => {
    let { id } = useParams();
    return (
        <div>
            <GlobalStyle />
            <Book title={ListBooks[id].title} />
            <Info>
                <h3>  Title: { ListBooks[id].title }                     </h3>
                <h3>  Pages: { ListBooks[id].pages }                     </h3>
                <h3>  Price: { ListBooks[id].price }                     </h3>
                <h3>  Release date of: { ListBooks[id].Release_date_of } </h3>
                <h3>  Publishing: { ListBooks[id].publishing }           </h3>
                <h3>  Units: { ListBooks[id].units }                     </h3>
            </Info>
        </div>
    )
}

export default BookDetail