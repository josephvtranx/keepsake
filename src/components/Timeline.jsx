import React from "react";
import Card from "../components/Card";

const Timeline = ({ data }) => {
  return (
    <section className="timeline">
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            <Card
              time={item.time}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;