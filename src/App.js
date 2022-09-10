import { Character } from "./components/Character.component";

const App = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Rick and morty</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Character />
      </div>
    </div>
  );
};

export default App;
