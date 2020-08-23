import React from 'react';
import { BookInfo } from '../../src/components/BookInfo';
import { fetchBook, fetchAuthors } from '../../src/utils/airtableData'

import Head from 'next/head'

export default function Book(props) {
    let book = props.book
    let authors = props.authors
    return (
        <div>
            <Head>
                <title>{book.title || 'CrowdfundNext App - Book'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BookInfo book={book} authors={authors} />
        </div>

    );
}

export async function getServerSideProps({ params }) {
    return {
        props: {
            book: await fetchBook(params.id),
            authors: await fetchAuthors()
        }
    }
}