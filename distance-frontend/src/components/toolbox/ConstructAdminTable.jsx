import { Table } from 'react-bootstrap';
import React from 'react';
import { schools } from '../../data/Data';

const constructAdminTable = (data) => {
  if (!data[0]) {
    console.log('HEYY!');
    return (<p>No data is found!</p>);
  }
  const columnNames = {
    fname: 'First Name',
    lname: 'Last Name',
    grade: 'Grade',
    enrollmentStatus: 'Status',
    distanceFromSchool: 'Distance',
    address: 'Address',
    school: 'School'
  };
  return (
    <Table id="adminSearch" striped bordered hover>
      <thead>
        <tr>
          {
            Object.values(columnNames).map((value) => <th key={value}>{value}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((st) => (
            <tr key={st.id}>
              { Object.keys(columnNames).map((key) => (
                <td key={key}>
                  { key !== 'school' ? st[key] : (schools.filter((sch) => sch.value === st.school)[0]).label }
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default constructAdminTable;
