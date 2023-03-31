import React from 'react';

const Questions = () => {
  return (
    <div>
      <h1>What is the difference between props and state?</h1>
      <p>
        ans: State is used to mange the component's data, Update UI data. State
        is mutable on the other hand props is immutable and it used to send data
        from parent component to child component.
      </p>
      <h1>How state works?</h1>
      <p>
        ans: When state is changed it re renders data in UI. Use state takes two
        variable as an array destructuring. First variable of the two holds the
        data and second one holds a function which is called to change the data
        in first variable. This is how useState hook works in react.
      </p>
      <h1>What can useEffect do besides loading the data?</h1>
      <p>
        ans: 1.it can be used to change the css based on state or props <br />
        2.It can run side effect during change of props or state. <br />
        3.It can be used for live filtering on state change. <br />
        We can do many other things by tracking props or state change on
        useEffect hook.
      </p>
      <h1>How react works?</h1>
      <p>
        ans: React is a library of javascript. In react we build component.
        Component is reuseable code used to build UI in small part by part.
        React has a virtual dom which used diff algo to determine minimum change
        needed to change the actual DOM. React has jsx which is extension of
        javascript. JSX is used to write html like component in react which then
        compiled to javascript by react. React has different hooks such as
        useEffect, useState. Those hooks helps to load data from third party or
        changes upon state change of a component. Overall this is how react
        works.
      </p>
    </div>
  );
};

export default Questions;
