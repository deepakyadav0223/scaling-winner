import { useSortableData } from "./useSortableData";
import React from 'react';

export const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <div className="container" >
            <table>
                <caption>Sorting Table</caption>
                <thead>
                <tr>
                    <th>
                    <button
                        type="button"
                        onClick={() => requestSort('fname')}
                        className={getClassNamesFor('fname')}
                    >
                        First Name
                    </button>
                    </th>
                    <th>
                    <button
                        type="button"
                        onClick={() => requestSort('lname')}
                        className={getClassNamesFor('lname')}
                    >
                        Last Name
                    </button>
                    </th>
                    <th>
                    <button
                        type="button"
                        onClick={() => requestSort('age')}
                        className={getClassNamesFor('age')}
                    >
                        Age
                    </button>
                    </th>
                    <th>
                    <button
                        type="button"
                        onClick={() => requestSort('fullname')}
                        className={getClassNamesFor('fullname')}
                    >
                        Full Name
                    </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id} bgcolor = {item.sty}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.age}</td>
                    <td>{item.fullname}</td>
                    </tr>
                ))}
                </tbody>
            </table>
      </div>
    );
  };