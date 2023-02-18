import React from "react";

const Trailers = ({ trailers }) => {
  return (
    <div className="grid gap-4 grid-flow-col">
      {trailers
        .filter((t) => t.type === "Trailer")
        .map((trailer) => (
          <div key={trailer.id} className="card">
            <iframe
              className="w-full"
              height="360"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allowFullScreen
            />
          </div>
        ))}
    </div>
  );
};

export default Trailers;
