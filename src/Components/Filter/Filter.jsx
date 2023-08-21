import { useContext, useState } from 'react';
import './Filter.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { mainContext } from '../../utils/Context';
const Filter = () => {
  const { theme, getData } = useContext(mainContext);
  const [selected, setSelected] = useState('all');
  const dropdownOptions = [
    { id: 1, label: 'africa' },
    { id: 2, label: 'america' },
    { id: 3, label: 'asia' },
    { id: 4, label: 'europe' },
    { id: 5, label: 'Oceania' },
  ];
  const handleSelect = async (selectedLabel) => {
    console.log('Selected:', selectedLabel);
    setSelected(selectedLabel);
    setClick(false);
    if (selectedLabel === selected) {
      await getData();
    } else {
      await getData(selectedLabel);
    }
  };
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
                handleSelect(item.label), setClick(false);
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
