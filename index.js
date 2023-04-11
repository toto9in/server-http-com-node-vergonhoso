const http = require('http'); // necessario pra criar o servidor http se nao usar framework
const fs = require('fs'); // modulo para abrir arquivos do sistema
const url = require('url'); // modulo de url

const port = 8080; //define a porta do url do servidor numa constante, na vdd eh so um numero

//criei um http server e coloquei dentro de uma constante serve (function expression)
const server = http.createServer((req, res) => {
  let query = url.parse(req.url, true); // retorna um objeto contendo varios atributos do url
  let filename = query.pathname; // atribuindo a ROTA para uma variavel
  console.log(query); //para ver oq tem nesse objeto query
  console.log(filename); //basicamente eh a string '/(nomeendereço)'

  //esse if compara oq tem no ENDERECO Da URL e se for igual oq ta proposto executa a funcao de abrir o arquivo e retornar ele
  if (filename === '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else if (filename === '/about') {
    fs.readFile('about.html', function (err, data) {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else if (filename === '/contact-me') {
    fs.readFile('contact-me.html', function (err, data) {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
