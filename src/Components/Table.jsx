import React from 'react';
import { ProductTable } from './ProductTable';
import '../CSS/style.css';

export default function Table() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, sty:'#ff0000', fname: 'Jon', age: 35, lname: 'Snow',fullname: 'Jon Snow'},
          { id: 2, sty: '00ff00' ,fname: 'Cersei', age : 42, lname: 'Lannister', fullname: 'Cersei Lannister'},
         
        ]}
      />
    </div>
  );
}
