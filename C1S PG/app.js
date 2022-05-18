const crear = React.createElement(
    type,
    [props],
    [...children]
);


const h1 = crear("h1",null,"Con lo visto hasta ahora")
const h2 = crear("h2",null,"Replica este HTML")
const h3 = crear("h3",null,"Usando")
const h4 = crear("h4",null,"React.js")

const body = document.querySelector("body")

const renderizarBody = crear(body, null, [h1, h2, h3, h4])

ReactDOM.render(renderizarBodym, getElementById("body"))