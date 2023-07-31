# Projeto CRUD

## Clique na imagem para abrir o vídeo demonstrativo.

[![CRUD](https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg)](https://www.youtube.com/watch?v=v8VAH2FnjlA "Everything Is AWESOME")

Criar um **CRUD** (com front-end opcional) de um cadastro de funcionário, tive 5 dias para realizar está atividade.
Pensei em uma estrutura MVC (Model-view-Controller) com um DAO para realizar as atividades em banco, com o sequelizer para criação de tabelas no banco.
Consegui montar a estrutura com a idéia porém 5 dias e mais semana de prova não foi o bastante para a implementação de um CRUD completo, apesar
da idéia ser bem simples, o front-end também acaba atrasando um pouco porém achei necessário fazer algo básico para que seja interativo.


obs: caso de erros de dependencias, rodar um **yarn install** em ambos os projetos. <br>
**Para buildar o front:** <br>
abrir o terminal no projeto, cd front/crud <br>
Verificar se o seu node está nas versões mais atuais e então dar um **yarn start** <br>
**Para buildar o back-end** <br>
Abrir o terminal no projet: **cd api** e rodar **node index.js** ou **yarn dev**
## DETALHE: Utilizei um banco mySql usando o Dbeaver para gravar os dados, então a configuração fica a seu critério, ou configurar um conforme está no index.js



**DDL da tabela:**
```sql
CREATE TABLE `funcionario` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) DEFAULT NULL,
  `Sobrenome` varchar(50) DEFAULT NULL,
  `email` varchar(90) DEFAULT NULL,
  `NIS` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) 
```
