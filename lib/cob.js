class Cobertura{
   

   verifLetra(arr){
    for(let letter of arr){
        console.log(typeof letter);
        if(typeof letter === 'string'){
            return true;
        }
    }
  }

  verifIntegridade(arr){
    const verif = this.verifLetra(arr);
        if(verif===true){
            throw 'Tem letra'
        }else{
            return 'Não tem letra'
        }
  }

}


module.exports = Cobertura;