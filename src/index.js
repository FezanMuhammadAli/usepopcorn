import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMoviesRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxrating={5} color="blue" onSetRating={setMoviesRating} />
//       <p>This Movies Has Been Rated {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxrating={10} />
    <StarRating size={24} color="blue" defaultRating={4} />
    <StarRating
      color="orange"
      size={35}
      maxrating={5}
      messages={["Terrible", "Good", "Okay", "Best", "Amazing"]}
      defaultRating={4}
    />

    <Test /> */}
    <App />
  </React.StrictMode>
);
