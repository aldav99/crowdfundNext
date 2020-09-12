import React from 'react';

import { AuthorTable } from './AuthorTable';

import { percentOfProgress } from './percentOfProgress';

import TheadBooks from './TheadBooks';

import { TrOfTable } from './TrOfTable';

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
                    <TrOfTable book={book} authors={authors} key={book.id} />
                </tr>)
            </tbody>
        </table>)
})