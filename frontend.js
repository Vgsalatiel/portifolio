//criei uma array para quando clicar uma lista aparecer para cada imagem
const listas =[
    `<h3>HTML5</h3><br>
    <details>
        <summary>Estrutura de página</summary>
        <p>
            Conhecimento em criar a estrutura básica de uma página HTML usando elementos como
            "html", head, body, header, nav, main, footer, etc.
        </p>
    </details>
    <ul>
        <li><b></b></li>
        <li>Tabelas</li>
        <li>Item 3</li>
    </ul>
    
    `,
    `CSS3:<br>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    `,
    `JavaScript:<br>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    `,
    `WordPress:<br>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    `
]

function front(index){//index se refere as arrays criadas ligadas as indices que coloquei na fuction no html
    
    let text = document.getElementById("texto");

    if (text) {
        // Update the content of the container with the corresponding message from the array
        text.innerHTML = listas[index];
      }
}