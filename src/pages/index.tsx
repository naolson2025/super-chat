import Contacts from '@/components/Contacts';
import Search from '@/components/Search';
import Layout from '@/components/Layout';
import CreateMessage from '@/components/CreateMessage';
import Head from 'next/head';
import MessageHistory from '@/components/MessageHistory';
import ChatHistory from '@/data/dummy-data'

interface HomeProps {
  contacts: any; // TODO: type this
}

const Home: React.FC<HomeProps> = (props) => {
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
        leftSidebar={<Contacts contacts={props.contacts} />}
        content={
          <>
            <MessageHistory messages={ChatHistory} />
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
