import React, { useState } from 'react';
import styles from './dropdown.module.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Select an option'}
        {isOpen ? <IoIosArrowUp className={styles.arrow} /> : <IoIosArrowDown className={styles.arrow} />}
      </div>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${option === selectedOption ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option === selectedOption && <span className={styles.tick}>✓</span>}
              <strong>{option}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
