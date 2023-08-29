import PropTypes from 'prop-types';
import css from './ContactsModal.module.css';

const ContactsModal = ({ contacts }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact by:</h2>
      <ul className={css.list}>
        {contacts && (
          <>
            {contacts.phone && (
              <li className={css.item}>
                <a href={`tel:${contacts.phone}`} className={css.link}>
                  {contacts.phone}
                </a>
              </li>
            )}
            <li className={css.item}>
              <a href={`mailto:${contacts.email}`} className={css.link}>
                {contacts.email}
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

ContactsModal.propTypes = {
  contacts: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default ContactsModal;
