"use client";
import { useState } from "react";
import { sculptureList } from "../data/data.js";

export default function State() {
  //index is a state variable and setIndex is the setter function.
  //any function starting with use is called a hook.
  // Hooks are special functions that are only available while React is rendering.
  // They let you “hook into” different React features.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <a href="https://react.dev/learn/adding-interactivity">
        Adding interactivity
      </a>
    
      <h1>State: a components memory</h1>
      <p>
        Components often need to change what’s on the screen as a result of an
        interaction. Typing into the form should update the input field,
        clicking “next” on an image carousel should change which image is
        displayed, clicking “buy” puts a product in the shopping cart.
        Components need to “remember” things: the current input value, the
        current image, the shopping cart. In React, this kind of
        component-specific memory is called state. You can add state to a
        component with a useState Hook. Hooks are special functions that let
        your components use React features (state is one of those features). The
        useState Hook lets you declare a state variable. It takes the initial
        state and returns a pair of values: the current state, and a state
        setter function that lets you update it.
      </p>
      <p>In React, useState, as well as any other function starting with “use”, is called a Hook.

Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.</p>
      <b>an image gallery uses and updates state on click</b>
      <button className="block my-5" onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
      This is what makes state different from regular variables that you might declare at the top of your module. State is not tied to a particular function call or a place in the code, but it’s “local” to the specific place on the screen. You rendered two Gallery components, so their state is stored separately.

Also notice how the Page component doesn’t “know” anything about the Gallery state or even whether it has any. Unlike props, state is fully private to the component declaring it. The parent component can’t change it. This lets you add state to any component or remove it without impacting the rest of the components.

What if you wanted both galleries to keep their states in sync? The right way to do it in React is to remove state from child components and add it to their closest shared parent. The next few pages will focus on organizing state of a single component, but we will return to this topic in Sharing State Between Components.

Recap
<ul>
  <li>Use a state variable when a component needs to “remember” some information between renders.</li>
  <li>State variables are declared by calling the useState Hook.</li>
  <li>Hooks are special functions that start with use. They let you “hook into” React features like state.</li>
  <li>
  Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook</li>
  <li>The useState Hook returns a pair of values: the current state and the function to update it.</li>
  <li>You can have more than one state variable. Internally, React matches them up by their order.</li>
  <li>State is private to the component. If you render it in two places, each copy gets its own state.</li>
</ul>


.



      </div>
    </>
  );
}
