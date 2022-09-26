import React from 'react';
import { nanoid } from 'nanoid';
import css from './filter.module.css';

const nameFilterId = nanoid();

const Filter = ({ filter, onFilterChange }) => (
  <>
    <label className={css.label} htmlFor={nameFilterId}>
      Find contacts by name
    </label>
    <input
      className={css.input}
      type="text"
      value={filter}
      id={nameFilterId}
      onChange={onFilterChange}
    />
  </>
);
export default Filter;
