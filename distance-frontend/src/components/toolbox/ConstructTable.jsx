import { Table } from 'react-bootstrap';
import React from 'react';
import { schools } from '../../data/Data';

const constructTable = (data, pageType) => {
  const { headers, options, id } = data;
  if (!options[0]) {
    return <p>No data is found!</p>;
  }
  return (
    <Table id={id} striped bordered hover>
      <thead>
        <tr>
          {Object.values(headers).map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {options.map((st) => (
          <tr key={st.id}>
            {Object.keys(headers).map((key) => (
              <td key={key}>
                {key !== 'school' ? 
                (st[key]==='paid' && !pageType 
                  ? "Payment Required"
                  : st[key]
                )
                : schools.filter((sch) => sch.value === st.school)[0].label}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default constructTable;
