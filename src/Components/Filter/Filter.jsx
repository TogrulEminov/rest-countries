import React, { useState } from 'react';
import './Filter.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const Filter = () => {
  const [selected, setSelected] = useState('Filter by region');
  const dropdownOptions = [
    { id: 1, label: 'Africa' },
    { id: 2, label: 'America' },
    { id: 3, label: 'Asia' },
    { id: 4, label: 'Europe' },
    { id: 5, label: 'Ocenia' },
  ];
  const [click, setClick] = useState(false);
  return (
    <div className="filter">
      <button className="select-btn" onClick={() => setClick((e) => !e)}>
        {selected}
        {click ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {click && (
        <ul className="select-list">
          {dropdownOptions?.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setSelected(item.label), setClick(false);
              }}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
