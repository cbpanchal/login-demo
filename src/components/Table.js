import React, { useState } from 'react';
import { tableData } from './data';
import '../styles/table.css';

const Table = () => {
  const [data, setData] = useState(tableData);
  const [search, setSearch] = useState('');

  const compareByAsc = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  const compareByDesc = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    };
  };

  const sortBy = (key) => {
    let newData = [...data];
    const arrInStr = JSON.stringify(newData);
    newData.sort(compareByAsc(key));
    const arrInStr1 = JSON.stringify(newData);
    if (arrInStr === arrInStr1) {
      newData.sort(compareByDesc(key));
    }
    setData(newData);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    const searchedData = data.filter(
      (user) => String(user.name).includes(searchValue) || String(user.age).includes(searchValue),
    );
    if (searchValue === '') {
      setData(tableData);
    } else {
      setData(searchedData);
    }
  };

  return (
    <div className="table-container">
      <label htmlFor="username">Search: </label>
      <input type="text" value={search} onChange={handleSearch} />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortBy('name')}>name</th>
            <th onClick={() => sortBy('age')}>age</th>
          </tr>
        </thead>
        <tbody>
          {data.map(function (user, index) {
            return (
              <tr key={index} data-item={user}>
                <td data-title="user">{user.name}</td>
                <td data-title="Value">{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
