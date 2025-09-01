import React from 'react';

const tableContainerStyle = {
  margin: '24px 0',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #e0e0e0',
  background: '#fff',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: '0',
  fontFamily: 'Outfit, sans-serif',
};

const thStyle = {
  background: '#0033A0',
  color: '#fff',
  fontWeight: 600,
  padding: '16px 12px',
  textAlign: 'left',
  fontSize: '1rem',
  border: 'none',
};

const tdStyle = {
  padding: '16px 12px',
  fontSize: '1rem',
  color: '#222',
  fontWeight: 500,
  border: 'none',
};

const trEvenStyle = {
  backgroundColor: '#fff',
};

const trOddStyle = {
  backgroundColor: '#f9f9f9',
};

const ReusableTable = ({ data, columns }) => {
  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  ...thStyle,
                  borderTopLeftRadius: index === 0 ? '12px' : 0,
                  borderTopRightRadius: index === columns.length - 1 ? '12px' : 0,
                }}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              style={rowIndex % 2 === 0 ? trEvenStyle : trOddStyle}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={tdStyle}>
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;