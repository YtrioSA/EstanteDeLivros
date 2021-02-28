import React                       from 'react'
import Books                       from '../Components/Books'
import { GlobalStyle, App, Text }  from '../Styles/Styles'
import { Route, Switch }           from 'react-router-dom'
import BookDetail                  from '../Components/BookDetail'
import ListBooks                   from '../Data/ListBooks'

const app = _ => {
    return (
        <div>
            <Route exact path='/' render={() => (
                <div>
                    <GlobalStyle />
                    <App>
                        <Text> Estante de Livros </Text>
                    </App>
                    <Books />
                </div>
            )} />
                <Route path="/bookdetail/:id" component={BookDetail} />
         </div>
    )
}
export default app

