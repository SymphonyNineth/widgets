import React, { useState, useEffect } from "react";
import axios from "axios";

const apiBase = "https://translation.googleapis.com/language/translate/v2";
const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        apiBase,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: apiKey,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    if (debouncedText) {
      doTranslate();
    }
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
