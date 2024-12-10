import React from "react";
import Card from "./Card";

const Timeline = ({ data }) => {
  
  const listItems = data.map((item, index) => (
    <li key={index}>
      <Card
        time={item.time}
        imgSrc={item.imgSrc}
        description={item.description}
      />
    </li>
  ));

  return (
    <section className="timeline">
      <ol>
        {listItems}
      </ol>
    </section>
  );
};

export default Timeline;