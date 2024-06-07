const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuração do banco de dados MySQL usando o nome do serviço 'db'
const config = {
  host: 'db',
  user: 'test',
  password: 'test',
  database: 'fullcycle'
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  connection.query(`INSERT INTO people (name) VALUES ('Gilberto')`, );

    connection.query('SELECT name FROM people', (error, results) => {
      if (error) {
        console.error('Erro ao buscar nomes na tabela:', error);
        res.status(500).send('Erro ao buscar nomes na tabela');
        return;
      }

      let response = '<h1>Full Cycle Rocks!</h1>';
      response += '<ul>';
      results.forEach(result => {
        response += `<li>${result.name}</li>`;
      });
      response += '</ul>';

      res.send(response);
    });
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});