import React from 'react';
import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { percentOfProgress } from './percentOfProgress';
import { styles, Royalty } from './BookRows';
export const TrOfTable = ({ book, authors, removeFromTable }) => {
    return (
        <React.Fragment>
            {(removeFromTable) ? <td><button onClick={() => removeFromTable(book.id)} className={styles.letter}>*</button></td> : <td>Unaccessible</td>}
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
            <td><Royalty minCost={book.minCost} /></td>
            <td>{book.neededCost}</td>
            <td>{book.fundedSum}</td>
            <td>{book.neededSum}</td>


            {(book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                : <td>{book.subscriber}</td>}

            <td><SubscribeModal /></td>
        </React.Fragment>
    );
};
