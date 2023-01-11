import React from "react";
function App() {
  React.useEffect(() => {
    function* demoGenerator() {
      let id = 1;
      while (true) {
        yield id;
        id += 1;
      }
    }
    const gen = demoGenerator();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.return(2));
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
  }, []);
  return <div></div>;
}

export default App;
