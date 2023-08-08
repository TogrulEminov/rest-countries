import React, { useContext, useState } from 'react';
import './Filter.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { mainContext } from '../../utils/Context';
const Filter = () => {
  const { theme } = useContext(mainContext);
  const [selected, setSelected] = useState('Filter by region');
  const dropdownOptions = [
    { id: 1, label: 'africa' },
    { id: 2, label: 'america' },
    { id: 3, label: 'asia' },
    { id: 4, label: 'europe' },
    { id: 5, label: 'ocenia' },
    { id: 6, label: 'all' },
  ];
  const [click, setClick] = useState(false);
  return (
    <div className="filter">
      <button
        className="select-btn"
        onClick={() => setClick((e) => !e)}
        data-theme={theme}>
        {selected}
        {click ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {click && (
        <ul className="select-list">
          {dropdownOptions?.map((item) => (
            <li
              data-theme={theme}
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
