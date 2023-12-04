import React, { ReactNode } from "react";

// rafce : snippet-> react arrow function component export.
type Props = {
  children: ReactNode;
};

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

// passing the longer text or the html content as attribute. is kinda ugly.
// So to pass the text or the html content as child to this component.
// To do that there is a special prop that all component support. is called 'children' we set its type to 'reactNode'
// now we can pass text or html content as child to the component.
// using a children prop. we can pass children to a component.

// last. search should you use interface or type for react props type.

// interface can inherit from other interface. which types cannot very easily you would have to use the intersection &.
// interfaces comes with bundle with bunch of features. that you don't care about. especially if all you want to do is
// define a basic object type.
// like declaration merging. if you define 2 interface with same name in same scope they would be merged.

// Use types. unless you need specific feature of interface.
// if you need a type that extends another type then use an interface.
// if you wanna say this class extends this interface then use interface.
