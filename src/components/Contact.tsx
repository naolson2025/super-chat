import { ContactType } from '@/types/ContactType';

interface ContactProps {
  contact: ContactType;
  handleSelectContact: (contact: ContactType) => void;
}

const Contact: React.FC<ContactProps> = ({ contact, handleSelectContact }) => {
  return (
    <button onClick={() => handleSelectContact(contact)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary-100 text-secondary-400">
          <span className="text-base">{contact.name[0]}</span>
        </div>
        <div>
          <div className="text-sm font-medium text-secondary-500">
            {contact.name}
          </div>
          <div className="text-xs text-secondary-400">{contact.email}</div>
        </div>
      </div>
    </button>
  );
};

export default Contact;
