const frutas = [
  { id: 1, name: "Anana", isStock: true },
  { id: 2, name: "Manzana", isStock: false },
  { id: 3, name: "Naranja", isStock: false },
  { id: 4, name: "Melon", isStock: true },
];

let App = (
  <div>
    <ul>
    <span>En stock:</span>
      {frutas.map((fruta) => {
        if (fruta.isStock) {
          return <li key={product.id}>{product.name}</li>;
        }
      })}
    </ul>
    
    <ul>
      <span>Sin stock:</span>
      {frutas.map((fruta) => {
        if (fruta.isStock == false) {
          return <li key={product.id}>{product.name}</li>;
        }
      })}
    </ul>
  </div>
); 



const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement); 
