import React from 'react';

function RoadmapItem({ year, milestones }) {
  return (
    <article>
      <h4>{year}</h4>
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}>{milestone}</li>
        ))}
      </ul>
    </article>
  );
}

export default RoadmapItem;
