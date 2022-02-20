import React, { useState, useEffect } from 'react';

const Loading = ({ text = 'Loading', time = 300 }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = setInterval(
      () =>
        setContent((content) =>
          content === `${text}...` ? text : `${content}.`
        ),
      time
    );

    return () => clearInterval(id);
  }, [text, time]);
  return (
    <div className="container">
      <h3 className="text-center">{content}</h3>
    </div>
  );
};

export default Loading;
