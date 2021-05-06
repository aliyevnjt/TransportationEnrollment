// TODO future enhancement for customized errors

// import {useState} from 'react';
//  function FormExample() {
// const [ errors, setErrors ] = useState({});
// const findFormErrors = () => {
//   const { fname, lname, birthDate, school, grade, address, enrollmentStatus,
//     parentName, parentEmailAddress, parentPhoneNumber} = inputs;
//   const newErrors = {};
//   // name errors
//   if (!fname || fname === '') {
//     newErrors.fname = 'cannot be blank!';
//   } else if (fname.length > 30) {
//     newErrors.fname = 'name is too long!';
//   }
//   // name errors
//   if (!lname || lname === '') {
//     newErrors.lname = 'cannot be blank!';
//   } else if (lname.length > 30) {
//     newErrors.lname = 'name is too long!';
//   }
//   // food errors
//   if (!food || food === '') {
//     newErrors.food = 'select a food!';
//   }
//   // rating errors
//   if (!rating || rating > 5 || rating < 1) {
//     newErrors.rating = 'must assign a rating between 1 and 5!';
//   }
//   // comment errors
//   if (!comment || comment === '') {
//     newErrors.comment = 'cannot be blank!';
//   } else if (comment.length > 100) {
//     newErrors.comment = 'comment is too long!';
//   }
//
//   return newErrors;
// };
