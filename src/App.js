import Card from "./components/Card/Card.js";

function App() {
  return (
    <div>
      <Card
        name="Sydney"
        phone="111-111-111"
        email="laith@hotmail.com"
        image={{
          url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          alt: "cute cat",
        }}
        favorited={false}
      />
    </div>
  );
}

export default App;
