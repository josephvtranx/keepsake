import React from "react";

const Timeline = ({ data }) => {
  return (
    <section className="timeline">
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            <div>
              <time className="date">{item.time}</time>
              <img src={item.imgSrc} alt={item.alt} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
