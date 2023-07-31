
const listab = [
  `
  <h3>Desenvolvimento Java com Integração MySQL</h3><br>
  <div id="java">
      <details>
          <p>
          Tenho experiência em desenvolver aplicativos Java independentes com integração MySQL
          Workbench para armazenar e recuperar dados em bancos de dados relacionais.
          </p>
      </details>
  </div>
  `
]
function backend(index){//index se refere as arrays criadas ligadas as indices que coloquei na fuction no html
    
    let text = document.getElementById("textob");

    if (text) {
        // Update the content of the container with the corresponding message from the array
        text.innerHTML = listab[index];
      }
}