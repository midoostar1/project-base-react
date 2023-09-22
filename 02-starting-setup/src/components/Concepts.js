import React from "react";

function Concepts({ concepts }) {

  return (
    <div>
      <ul id="concepts">
        {concepts.map((concept) => {
          return (
            <li className="concept" key={concept.title}>
              <img src={concept.image} alt={concept.title} />
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Concepts;
