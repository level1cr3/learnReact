import React from "react";

let count = 0;

const MyMsg = () => {
  console.log("count " + count);

  count++;
  return <div>Message : {count}</div>;
}; // impure function. It returns different value every time we call this function.

// const MyMsg = () => {
//   let count = 0;
//   count++;
//   return <div>Message : {count}</div>;
// }; // pure function.

// to keep our components pure. we should keep changes out of the render phase. we should not change any object that
// existed before rendering.
// It is totally fine to change object. that we created as part of rendering.

export default MyMsg;
