import React from 'react';
import Pagination from '@mui/material/Pagination';

const Paginate = ({ pages, page, isAdmin = false, keyword = '', history }) => {
  const handleChange = (event, value) => {
    if (!isAdmin) {
      if (keyword) {
        history.push(`/search/${keyword}/page/${value}`);
      } else {
        history.push(`/page/${value}`);
      }
    } else {
      history.push(`/admin/productlist/${value}`);
    }
  };
  return (
    pages > 1 && (
      <Pagination
        count={pages}
        page={page}
        onChange={handleChange}
        style={{ marginBottom: '2rem' }}
      />
    )
  );
};

export default Paginate;
