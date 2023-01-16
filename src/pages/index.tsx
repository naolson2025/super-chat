import Contacts from '@/components/Contacts';
import Container from '@/components/Container';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Super Chat</title>
        <meta name="description" content="chat app side project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/chat-bubble.png" />
      </Head>
      <Container>
        <Layout
          header={<Input label='Search'/>}
          leftSidebar={<Contacts />}
          content={<div>Content</div>}
        />
      </Container>
    </>
  );
}
