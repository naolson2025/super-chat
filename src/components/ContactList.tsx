import { ContactType } from '@/types/ContactType';
import Contact from './Contact';

interface ContactsProps {
  contacts: ContactType[];
  selectedContact: ContactType;
  handleSelectContact: (contact: ContactType) => void;
}

const ContactList: React.FC<ContactsProps> = (props) => {
  const listItems = props.contacts?.map((contact) => (
    <li className="flex py-4 px-3 hover:bg-indigo-300" key={contact.id}>
      <Contact contact={contact} handleSelectContact={props.handleSelectContact} />
    </li>
  ));

  return (
    <div className="h-96 overflow-y-scroll rounded-lg bg-white shadow">
      <ul className="divide-y divide-gray-100">{listItems}</ul>
    </div>
  );
};

export default ContactList;
