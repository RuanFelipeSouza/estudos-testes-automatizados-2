import clientBase from '../../database/baseClient.js';
export class Cliente {    
    checkClientByCpf(cpf){
      return(clientBase.Cliente.cpf === cpf ? clientBase.Cliente :  null);      
    }
  }
  