'use client'
import React,{useState} from 'react';
import styles from './Filter.module.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const filtersData = [
  {
    "name": "ideal_for",
    "label": "Ideal for",
    "options": ["Men", "Women", "Baby & Kids"]
  },
  {
    "name": "occasion",
    "label": "Occasion",
    "options": ["Casual", "Formal", "Party", "Sports", "Holiday"]
  },
  {
    "name": "work",
    "label": "Work",
    "options": ["Office", "Field", "Remote"]
  },
  {
    "name": "fabric",
    "label": "Fabric",
    "options": ["Cotton", "Silk", "Linen", "Polyester", "Wool"]
  },
  {
    "name": "segment",
    "label": "Segment",
    "options": ["Premium", "Luxury", "Budget", "Mid-range"]
  },
  {
    "name": "suitable_for",
    "label": "Suitable for",
    "options": ["Summer", "Winter", "All Seasons"]
  },
  {
    "name": "raw_material",
    "label": "Raw Material",
    "options": ["Organic", "Synthetic", "Recycled", "Natural Fiber"]
  },
  {
    "name": "pattern",
    "label": "Pattern",
    "options": ["Solid", "Striped", "Printed", "Checked", "Floral"]
  }
]


const Filter = () => {
  const [expandedFilters, setExpandedFilters] = useState({});

  const toggleFilter = (filterName) => {
    setExpandedFilters((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName]
    }));
  };

  return (
    <aside className={styles.filterContainer}>
      <div className={styles.checkbox}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>


      {filtersData.map((filter, index) => (
        <div key={index} className={styles.filter}>

          <div className={styles.filterHeader} onClick={() => toggleFilter(filter.name)}>
            <h4>{filter.label}</h4>
            <span>{expandedFilters[filter.name] ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span> {/* Toggle Arrow */}
          </div>
          
          {expandedFilters[filter.name] && (
            <div className={styles.filterOptions}>
              <p>All</p>
              <p className={styles.unselect}>Unselect all</p>
              {filter.options.map((option, i) => (
                <div key={i} className={styles.checkboxOption}>
                  <input type="checkbox" id={`${filter.name}-${option}`} name={filter.name} value={option} />
                  <label htmlFor={`${filter.name}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Filter;
