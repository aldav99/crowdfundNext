import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ReactDOM from 'react-dom';
import React, { useContext } from 'react';

import authContext from '../src/components/authContext';

import UserAvatar from '../src/components/user.png';




import { App } from '../src/components/App';


const user = {
  email: 'vova@mail.com',
  firstName: 'Vova',
  lastName: 'Ivanov',
  avatarUrl: UserAvatar
};

import { fetchData, fetchAuthors } from '../src/utils/airtableData'

export default function Home({ books, authors }) {
  return (
    <div>
      <Head>
        <title>Crowdfund App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <authContext.Provider value={user}>
        <App books={books} authors={authors} />
      </authContext.Provider>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      books: await fetchData(),
      authors: await fetchAuthors()
    }
  }
}

