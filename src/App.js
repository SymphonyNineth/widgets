import React, { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: `React is a free and open-source front-end JavaScript library for building user interfaces or UI components.
       It is maintained by Facebook and a community of individual developers and companies.
       React can be used as a base in the development of single-page or mobile applications.
       However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing,
       as well as certain client-side functionality.`,
  },
  {
    title: "What is Angular?",
    content: `Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google
          and by a community of individuals and corporations.
          Angular is a complete rewrite from the same team that built AngularJS.`,
  },
  {
    title: "What is Vue?",
    content: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.
       It was created by Evan You, and is maintained by him and the rest of the active core team members.`,
  },
];

const options = [
  { label: "Red Color", value: "red" },
  { label: "Blue Color", value: "blue" },
  { label: "Green Color", value: "green" },
];

const App = () => {
  const [selected, onSelectedChange] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          onSelectedChange={onSelectedChange}
          selected={selected}
          label="Select a color"
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
