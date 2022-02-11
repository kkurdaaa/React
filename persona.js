const Product = (props) => {
    return React.createElement(
      "div",
      { className: "product" },
      React.createElement("img", { src: props.image }), 
         
      React.createElement("p", {}, `Name: ${props.name} `),
      React.createElement("p", {}, ` Study: ${props.Study} `),
      React.createElement("p", {}, `Hobbies: ${props.hobby} `),
      
    );
  };