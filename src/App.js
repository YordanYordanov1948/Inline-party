import "./App.css";

const wrapper = {
  display: "flex",
  justifyContent: "space-between",
  margin: "1rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid #ccc",
};

const mealHeading = {
  margin: "0 0 0.25rem 0",
};

const description = {
  fontStyle: "italic",
};

const price = {
  marginTop: "0.25rem",
  fontWeight: "bold",
  color: "#ad5502",
  fontSize: "1.25rem",
};

function App() {
  return (
    <div className="App">
      <div style={wrapper}>
        <h3 style={mealHeading}>Sushi</h3>
        <div style={description}>I prefer steak than sushi.</div>
        <div style={price}>$9.99</div>
      </div>
    </div>
  );
}

export default App;
