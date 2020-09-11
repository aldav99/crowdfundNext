import React from 'react';

import { AuthorTable } from './AuthorTable';

import { percentOfProgress } from './percentOfProgress';

import { TheadBooks } from './Table';

const styles = {
    letter: {
        color: 'red'
    }
}

export const BookInfo = React.memo(({ book, authors }) => {
    return (
        <table>
            <TheadBooks />
            <tbody>
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.brief}</td>
                    <td>{book.page}</td>
                    <td>{book.lang}</td>
                    <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                    <td><img src={book.cover} width="40"
                        height="40"></img></td>
                    <td><AuthorTable
                        authors={authors.filter(author => book.authors.includes(author.id))} />
                    </td>

                    <td>{book.minCost}</td>
                    <td>{book.neededCost}</td>
                    <td>{book.fundedSum}</td>
                    <td>{book.neededSum}</td>


                    {
                        (book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                            : <td>{book.subscriber}</td>
                    }
                </tr>)
            </tbody>
        </table>)
})