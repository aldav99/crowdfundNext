import React from 'react';


import { TheadBooks } from './Table';


import Link from 'next/link'
import { TrOfTable } from './TrOfTable';

export const styles = {
    letter: {
        color: 'red'
    }
}

export const BookRows = React.memo(({ books, removeFromTable, authors }) => {
    console.log('render BookRow')
    return (
        <table>
            <TheadBooks />
            <tbody>
                {
                    books.slice(0, 3).map(book => {
                        return (<tr key={book.id}>
                            <td>
                                <Link href="/Books/[id]" as={`/Books/${book.id}`}>
                                    <a>{book.title}</a>
                                </Link>
                            </td>
                            <TrOfTable removeFromTable={removeFromTable} book={book} authors={authors} key={book.id} />
                        </tr>)
                    })
                }
            </tbody>
        </table>)
})


export class Royalty extends React.PureComponent {
    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef();
        this.state = { royalty: '' };

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }


    handleChange(event) {
        this.setState({ royalty: event.target.value });
    }

    keyPress(event) {
        if (event.keyCode == 13) {
            let authorsInterest = Math.floor(parseInt(event.target.value) * 0.9)

            let minCost = parseInt(this.props.minCost)

            if (authorsInterest < minCost) {
                alert(`Less minCost: ${minCost}`)
                return this.setState({ royalty: '' });
            }
            this.setState({ royalty: authorsInterest });
        }
    }

    componentDidMount() {
        this.searchInputRef.current.focus();
    }

    render() {
        return (
            <input ref={this.searchInputRef} value={this.state.royalty} onKeyDown={this.keyPress} onChange={this.handleChange} />
        )
    }
}


