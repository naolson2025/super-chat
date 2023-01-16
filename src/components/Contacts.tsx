interface ContactsProps {
  contacts: any; // TODO: type this
}

const Contacts: React.FC<ContactsProps> = (props) => {
  const listItems = props.contacts?.map((contact: any) => (
    <li className="flex py-4" key={contact.id}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-secondary-100 text-secondary-400">
          <span className="text-base">NO</span>
        </div>
        <div>
          <div className="text-sm font-medium text-secondary-500">
            {contact.name}
          </div>
          <div className="text-xs text-secondary-400">{contact.email}</div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="h-96 overflow-y-scroll rounded-lg bg-white shadow">
      <ul className="divide-y divide-gray-100 py-2 px-4">{listItems}</ul>
    </div>
  );
};

export default Contacts;
