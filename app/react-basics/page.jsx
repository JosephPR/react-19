"use client";
import Button from "../components/Button";
// exported as a named export gotta be wrapped in {}
import PropsButton from "../components/PropsButton";
import Profile from "../components/DisplayingData";
import { useState } from "react";

export default function ReactBasics() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // Function to toggle the value of the "toggle" state
  const toggleChange = () => {
    setToggle(!toggle);
  };
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listItems = products.map((product) => (
    <li
      key={product.id}
      className={product.isFruit ? "text-red-800" : "text-slaten-800"}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <h1> Hi from React Basics homepage!</h1>

      <p>
        Creating and nesting components React apps are made out of components. A
        component is a piece of the UI (user interface) that has its own logic
        and appearance. A component can be as small as a button, or as large as
        an entire page. React components are JavaScript functions that return
        markup:
      </p>

      <h2>Creating and nesting components</h2>
      <Button>Login</Button>
      <p>
        JSX lets you put markup into JavaScript. Curly braces let you “escape
        back” into JavaScript so that you can embed some variable fom your code
        and display it to the user. For example, this will display user.name:
      </p>

      <h2>Displaying data</h2>
      <Profile />

      <h2>Conditional Rendering</h2>
      <p>
        you can use the conditional ? operator. Unlike if, it works inside JSX
      </p>

      <div>
        {/* */}

        <h2>Responding to events and updating the screen</h2>
        <p> Display the current value of the toggle state</p>
        <p>The toggle is {toggle ? "ON" : "OFF"}</p>
        {/* */}
        <p>Button to trigger the toggleChange function </p>
        <button onClick={toggleChange}>Toggle</button>

        <div className="flex gap-10">
          <div>
            <h2>Counters that update separately</h2>
            <p>
              Every component gets its own state. Using the useState hook in the
              Button component.State is local to a component instance on the
              screen. In other words, if you render the same component twice,
              each copy will have completely isolated state! Changing one of
              them will not affect the other.
            </p>
            <Button />
            <Button />
          </div>
          <div>
            <h2>
              Counters that update together with props passed to the component
            </h2>
            <p>
              With the functionality of using different classes from tailwind
            </p>
            <PropsButton
              count={count}
              onClick={handleClick}
              buttonColor={"bg-blue-500"}
            />
            <PropsButton
              count={count}
              onClick={handleClick}
              buttonColor={"bg-red-500 p-10"}
            />
          </div>
        </div>

        <h2>Rendering Lists</h2>
        <p>
          You will rely on JavaScript features like for loop and the array map()
          function to render lists of components
        </p>
        <ul>{listItems}</ul>
      </div>
    </>
  );
}
