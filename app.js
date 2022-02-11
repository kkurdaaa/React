const App = () => {
    return React.createElement(
      "div",
      { className: "app-container" },
     
        React.createElement("h1", {}, ""),
      [
        
        {

          image:"https://media.architecturaldigest.com/photos/60e71db5ab269c67afc7e283/3:4/w_1500,h_2000,c_limit/GettyImages-1215628293.jpg",
          name: "Elon Musk",
          Study: "charismatic co-founder and CEO of Tesla and rocket manufacturer SpaceX",
          hobby: "Video Games, Anime",
        },
        {
          image: "https://pbs.twimg.com/profile_images/1477081796437327882/W4X_7kLZ_400x400.jpg",
          name: "Karim Kurda",
          Study: "Engineer and Accountant",
          hobby: "Coding, Footbal and Video Games",
        },
        
        
      ].map((prod) =>
        React.createElement(Product, {
          image: prod.image,
          name: prod.name,
          Study: prod.Study,
          hobby: prod.hobby,
      
        })
      )
    );
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));