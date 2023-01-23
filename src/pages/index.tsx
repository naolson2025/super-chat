import ContactList from '@/components/ContactList';
import Search from '@/components/Search';
import Layout from '@/components/Layout';
import CreateMessage from '@/components/CreateMessage';
import Head from 'next/head';
import Conversation from '@/components/Conversation';
import Conversations from '@/data/dummy-data';
import { ContactType } from '@/types/ContactType';
import React from 'react';

interface HomeProps {
  contacts: ContactType[];
}

const Home: React.FC<HomeProps> = (props) => {
  const [selectedContact, setSelectedContact] = React.useState<ContactType>(
    props.contacts[0]
  );

  const handleSelectContact = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Super Chat</title>
        <meta name="description" content="chat app side project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chat-bubble.png" />
      </Head>
      <Layout
        header={<Search label="Search" />}
        leftSidebar={
          <ContactList
            contacts={props.contacts}
            selectedContact={selectedContact}
            handleSelectContact={handleSelectContact}
          />
        }
        content={
          <>
            <Conversation messages={Conversations[selectedContact.id]} />
            <CreateMessage />
          </>
        }
      />
    </div>
  );
};

// here we fetch the data on the server side
export async function getStaticProps() {
  return {
    props: {
      contacts: await fetch('https://jsonplaceholder.typicode.com/users').then(
        (resp) => resp.json()
      ),
    },
    // rebuilds the page every 30 minutes
    revalidate: 1800,
  };
}

export default Home;
