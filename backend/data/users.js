import {v4 as uuid} from 'uuid';
uuid();

const users = [
  { id: uuid(), name:"Marco", email: "marco@email.com", senha: "testandoPasswd" },
  { id: uuid(), name:"Ana", email: "ana@email.com", senha:"testandoPasswd"},
  { id: uuid(), name:"Lílian", email: "lilian@email.com", senha:"testandoPasswd"},
  { id: uuid(), name:"Eirene", email: "eirene@email.com", senha:"testandoPasswd"},
  { id: uuid(), name:"Pedro", email: "pedro@email.com", senha:"testandoPasswd"},
  { id: uuid(), name:"Teste", email: "teste@email.com", senha:"testandoPasswd"},
];
export default users;   