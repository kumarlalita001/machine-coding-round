import React from "react";

const Footer = () => {
  const recentCodingRoundTopics = [
    "Data Structures (Arrays, Linked Lists, Trees, etc.)",
    "Algorithms (Sorting, Searching, Dynamic Programming, etc.)",
    "DOM Manipulation",
    "Event Handling",
    "Asynchronous JavaScript (Promises, Async/Await)",
    "State Management (Redux, Context API)",
    "Component Lifecycle",
    "Error Handling",
    "Performance Optimization",
    "Responsive Design",
    "CSS Layouts (Flexbox, Grid)",
    "Accessibility",
    "Security (Cross-site scripting, CSRF protection)",
    "Testing (Unit Testing, Integration Testing)",
    "Browser Compatibility",
    "ES6+ Features",
    "HTTP Requests (AJAX, Fetch API)",
    "Webpack or other module bundlers",
    "Code Optimization",
    "Memory Management",
    "Design Patterns",
    "Problem-solving Skills",
  ];

  return (
    <div className="w-full float-end h-fit flex-wrap flex justify-between items-center p-2 bg-blue-950 text-white">
      {recentCodingRoundTopics?.map((item, index) => {
        return (
          <div className="p-2" key={index}>
            {" "}
            {item}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
