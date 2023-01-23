import { Message } from '@/types/MessageType';

interface Conversations {
  [key: number]: Message[];
}

const Conversations: Conversations = {
  1: [
    {
      "userId": 1,
      "text": "Hello"
    },
    {
      "userId": 1,
      "text": "How are you?"
    },
    {
      "userId": 2,
      "text": "great, super happy panda"
    },
    {
      "userId": 1,
      "text": "you code today?"
    },
    {
      "userId": 2,
      "text": "everyday"
    },
    {
      "userId": 2,
      "text": "That's why my eyes hurt"
    },
    {
      "userId": 1,
      "text": "get used to it"
    },
    {
      "userId": 1,
      "text": "your back will hurt too"
    },
    {
      "userId": 2,
      "text": "I got a standing desk to help with that"
    },
    {
      "userId": 1,
      "text": "noice"
    },
  ],
  2: [
    {
      "userId": 1,
      "text": "He he he"
    },
    {
      "userId": 1,
      "text": "Are you ok?"
    },
    {
      "userId": 2,
      "text": "nope, code don't work"
    },
    {
      "userId": 1,
      "text": "Did you try stackoverflow?"
    },
  ],
}

export default Conversations;