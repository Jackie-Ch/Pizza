import React from 'react';
import styles from './Pagination.module.scss';
import _ from 'lodash';

function Pagination({ items, itemsOnPage, setCurrentPage, currentPage }) {
  // const [activePage, setActivePage] = useState(1);
  const itemsCount = items.length;
  const pageCount = Math.ceil(itemsCount / itemsOnPage);
  const pageRange = _.range(1, pageCount + 1);

  return (
    <ul className={styles.root}>
      {pageRange.map((page, index) => (
        <li
          key={'key_' + page}
          className={currentPage - 1 === index ? 'active' : ''}
          onClick={() =>
            setCurrentPage(page, console.log('page:', page, 'index:', index))
          }
        >
          {page}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
