import Phonebook from "components/Phonebook";
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
	 <Phonebook />
    </div>
  );
};
