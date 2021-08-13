import React, { useState } from "react";
import Convert from "./Convert";

import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
  { label: "Armenian", value: "arm" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text-input"> Enter Text</label>
          <input
            id="text-input"
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <hr />
      <h3 className="ui header">
        <Convert language={language} text={text} />
      </h3>
    </div>
  );
};

export default Translate;
