import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        COIN CRYPT<span>®</span>
      </h2>
    </div>
  );
};

export default Footer;

// function pseudocode(str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char[0]) {
//       let match = true;
//       for (let j = 0; j < char.length; j++) {
//         if (str[i + j] !== char[j]) {
//           match = false;
//         }
//       }
//       if (match == true) counter += 1;
//     }
//   }
//   return counter;
// }

// pseudocode("i need to go take a go shit", "go");
 