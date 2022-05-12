import React, { FC, useEffect, useState } from "react";

export const TestComponent: FC = () => {
  // Prettier Warning
  const obj = { foo: 'thing', bar: 'otherthing', me: 'you', this: 'that' };
  // Unused value
  const [testValue, setTestValue] = useState<string>();
  const thing = 'thing';
  const foo = "foo";

  // No 'any'
  let me: any;

  useEffect(() => {
    console.log(testValue);
    // Missing dependency for hook
  }, []);
  return (
    <div>
      {/* a11y issue */}
      <img src="www.google.com"/>
      <a>Thing</a>
    </div>
  );
};
