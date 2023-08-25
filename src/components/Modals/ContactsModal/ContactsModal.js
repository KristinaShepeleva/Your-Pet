import css from './ContactsModal.module.css';

const ContactsModal = ({ pet }) => {
  const contact = pet.contacts;
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact by:</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <a href={`tel:${contact.phone}`} className={css.link}>
            {contact.phone}
          </a>
        </li>
        <li className={css.item}>
          <a href={`mailto:${contact.email}`} className={css.link}>
            {contact.email}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsModal;
