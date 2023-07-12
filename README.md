# Project Report
## Grupo 14
Membros:  
- Gabriel Barbosa de Amorim Perão - NUSP: 12677874
- Murillo Moraes Martins - NUSP: 12701599
- Thaís Ribeiro Lauriano - NUSP: 12542518

## Requirements
Além dos requisitos descritos no documento original, temos os seguintes requisitos específicos para o nosso projeto:
- Funcionalidade Específica: nosso site irá possuir um sistema de previews de músicas, isso será mais detalhado na próxima seção.

## Project Description
Nosso projeto é uma loja online de discos de vinil, chamada "Vinil Mil", nela os usuários podem comprar discos de vinil com músicas de diversos gêneros.  
  
Para cumprir os requisitos, a loja terá dois tipos de usuários: Administradores e Clientes. Os Administradores podem adicionar, editar e remover informações sobre os discos disponíveis na loja. Enquanto os usuários poderão fazer compras de um ou mais discos.  
  
Para a funcionalidade específica do nosso projeto, cada disco terá uma _preview_ de uma música contida naquele disco, ou seja, o cliente poderá ouvir uma parte do album sem precisar comprá-lo, assim o cliente pode ter uma ideia melhor do produto disponível na loja. 
  
Para exemplificar ainda mais como o site será, abaixo está um diagrama de navegação demonstrando como as páginas podem ser navegadas:

<img src="NavigationDiagram.png" alt="Navigation Diagram" width="400">

No caso a maior parte dessas páginas irá ser navegada pelo Cliente, enquando um Administrator só irá ter acesso à um Menu em que ele pode fazer alterações aos produtos da loja.

## Comments About the Code
Sem comentários

## Test Plan
Para a parte do frontend (ou funcionalidade do cliente) não foram utilizadas ferramentas de teste. Ao invés disso foram feitos testes visuais para saber se os componentes estavam sendo renderizados corretamente ou se os containers estavam se comportando da forma esperada de acordo com o uso deles na aplicação.

Para a parte do backend foram realizados testes usando a ferramenta Postman para gerar requisições pré-montadas. Dessa forma, foi possível testar todas as rotas do servidor para diferentes casos. Para acessar o workspace do Postman, basta acessar o link: https://www.postman.com/blue-trinity-453070/workspace/vinil-mil/collection/16600783-da2aa0b1-376a-484b-b9ca-e51c6176a411?action=share&creator=16600783
<br>
No workspace encontram-se modelos para testar todos os endpoints, com request-bodies já prontos. Também é possível alterar os bodies, adicionando os dados desejados para o teste.

Ainda para o backend, planejamos realizar testes automatizados utilizando a ferramenta Jest para garantir que seja possível:
  - registrar-se como novo usuário,
  - fazer login como usuário ou como administrador,
  - adicionar, editar e remover produtos do estoque como administrador,
  - adicionar produtos ao carrinho e finalizar pedido como usuário e
  - buscar por produtos pelo nome.

## Test Results
Para a parte do frontend foram utilizados testes visuais (como dito na seção anterior), portanto não é possivel mostrar o resultado dos testes (além de ver a funcionalidade dos componentes na aplicação).

Os testes do backend tiveram resultados satisfatórios, e todas as rotas estão funcionando normalmente.

## Build Procedures
O projeto foi desenvolvido usando a biblioteca React para o Frontend e o Node.js para o Backend, para utilizar o projeto é necessário primeiro instalar o npm usando o comando:
```
$ sudo apt install npm
```
Com o npm instalado, é necessário acessar a pasta do projeto com o comando:
```
$ cd vinil_mil/
```
Após isso é necessário instalar as dependências da aplicação (que pode demorar um tempo):
```
$ npm install
```
Depois, abra duas telas de terminal, em uma delas execute o comando:
```
$ npm run start:dev
```
Dessa forma será iniciado o Backend. Após isso (em outro terminal) execute o comando:
```
$ npm start
```
Depois de um tempo será aberto uma janela no browser com a apĺicação.

### Usuários:
email: admin  
senha: admin

email: gabrielperao@hotmail.com  
senha: senha

## Problems
Ao adicionar um áudio ou uma imagem, a aplicação "reinicia", isso ocorre pois o frontend lê as imagens diretamente do diretório, o correto seria ter uma entrada no backend que serviria as imagens para o frontend.

O login não é feito nem com cookies nem com uma sessão, o que faz com que, ao atualizar a página, o usuário seja deslogado de sua conta. O mesmo é ocorre com o carrinho de compras.

## Comments
Sem comentários
