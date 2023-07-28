//criei uma array para quando clicar uma lista aparecer para cada imagem
const listas =[
    `<h3>HTML5</h3><br>
        <div id="html">
            <details>
                <summary>Estrutura de página</summary>
                <p>
                    Conhecimento em criar a estrutura básica de uma página HTML usando elementos como
                    "html", head, body, header, nav, main, footer, etc.
                </p>
            </details>
            <details>
                <summary>Semântica</summary>
                <p>
                Utilização adequada de elementos semânticos para melhorar a acessibilidade e o SEO,
                como section, article, aside, header, footer, nav
                </p>
            </details>
            <details>
                <summary>Tabelas</summary>
                <p>
                Conhecimento em criar tabelas HTML para exibir dados tabulares, utilizando os elementos
                table, tr, td, th, etc.
                </p>
            </details>
            <details>
                <summary>Links e Âncoras</summary>
                <p>
                Uso adequado de links e âncoras com os elementos "a" para navegação interna e externa.
                </p>
            </details>
            <details>
                <summary>Litas</summary>
                <p>
                Criação de listas ordenadas ol e não ordenadas ul utilizando os elementos li.
                </p>
            </details>
            <details>
                <summary>Imagens e Multimídia</summary>
                <p>
                Inclusão de imagens img e multimídia (como vídeos e áudio) em suas páginas HTML.
                </p>
            </details>
        </div>
    `,
    `<h3>CSS3</h3><br>
        <div id="css">
            <details>
                <summary>Seletor e Propriedades</summary>
                <p>
                    Conhecimento sobre diferentes tipos de seletores CSS e como aplicar várias
                    propriedades de estilo, como cores, fontes, tamanhos, margens, preenchimentos,
                    bordas, etc.
                </p>
            </details>
            <details>
                <summary>Layout Responsivo</summary>
                <p>
                    Habilidade para criar layouts responsivos usando técnicas como Media Queries,
                    Flexbox e CSS Grid para se adaptar a diferentes dispositivos e tamanhos de tela.
                </p>
            </details>
            <details>
                <summary>Estilização de Texto</summary>
                <p>
                    Utilização de propriedades de estilização de texto,
                    como font-family, font-size, font-weight, text-align, text-decoration, etc.
                </p>
            </details>
            <details>
                <summary>Estilização de Cores e Fundos</summary>
                <p>
                    Conhecimento sobre como aplicar
                    cores de fundo e de texto, gradientes, transparências, efeitos de sombra, entre outros.
                </p>
            </details>
        </div>
    `,
    `<h3>JavaScript</h3><br>
        <div id="js">
            <details>
                <summary>Manipulação do DOM</summary>
                <p>
                    Habilidade para interagir
                    e modificar elementos HTML e CSS no Document Object Model usando JavaScript.
                </p>
            </details>
            <details>
                <summary>Eventos</summary>
                <p>
                    Capacidade de lidar com eventos do usuário,
                    como cliques de mouse, pressionamentos de teclas e outras interações.
                </p>
            </details>
            <details>
                <summary>Manipulação de Arrays e Objetos</summary>
                <p>
                    Habilidade para trabalhar com arrays e objetos, usando métodos como
                    map(), filter(), reduce(), entre outros.
                </p>
            </details>
            <details>
                <summary>Frameworks e Bibliotecas</summary>
                <p>
                    Experiência em usar frameworks e bibliotecas JavaScript populares,
                    como o Vue.js, para criar interfaces de usuário interativas.
                </p>
            </details>
        </div>
    `,
    `<h3>WordPress</h3><br>
    <div id="wp">
        <details>
            <summary>Customização do Tema</summary>
            <p>
                Capacidade de personalizar temas WordPress
                existentes ou criar temas personalizados do zero usando HTML, CSS e PHP.
            </p>
        </details>
        <details>
            <summary>Integração de Mídias Sociais</summary>
            <p>
                Habilidade para integrar botões de
                compartilhamento de redes sociais e feeds de mídias sociais ao site WordPress.
            </p>
        </details>
        <details>
            <summary>Responsividade</summary>
            <p>
                Capacidade de criar sites WordPress
                responsivos, que se adaptam a diferentes dispositivos e tamanhos de tela.
            </p>
        </details>
        <details>
            <summary>Formulários de Contato</summary>
            <p>
                Experiência em criar
                formulários de contato personalizados usando plugins ou códigos personalizados.
            </p>
        </details>
    </div>
    `
]

function front(index){//index se refere as arrays criadas ligadas as indices que coloquei na fuction no html
    
    let text = document.getElementById("texto");

    if (text) {
        // Update the content of the container with the corresponding message from the array
        text.innerHTML = listas[index];
      }
}