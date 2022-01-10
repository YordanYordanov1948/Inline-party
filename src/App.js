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

function App() {
  return (
    <div style={wrapper}>
      <div>
        <h3 style={mealHeading}>Sushi</h3>
        <div className="description">I prefer steak than sushi.</div>
        <div className="price">$9.99</div>
      </div>
    </div>
  );
}

export default App;
