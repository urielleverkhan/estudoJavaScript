
let telefone1 = "91234-2345";
let telefone2 = "1234-2345";

function mascararTelefone(numero){
    let hifemPosicao = numero.indexOf("-");
    let numeroInicio = numero.slice(0, hifemPosicao);
    let numeroFinal = numero.slice(hifemPosicao+1);
    let doisUltimos = numeroFinal.slice(-2);
  
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimos.padStart(numeroFinal.length, "*")}`;
}

console.log(mascararTelefone(telefone1));
console.log(mascararTelefone(telefone2));


function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim();
    let primeiroEspaco = nomeCompleto.indexOf(" ");
    if(primeiroEspaco < 0){
        return nomeCompleto;
    }
    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco);
    let sobrenome = nomeCompleto.slice(primeiroEspaco+1);
    return sobrenome + " , " + primeiroNome

}

function formatarNomeSplit(nomeCompleto){
    let nome = nomeCompleto.split(" ");

    if(nome.length === 1){
        return nomeCompleto;
    }
    let primeiroNome = nome.shift();
    
    return nome.join(" ") + " , " + primeiroNome

}
console.log(formatarNomeSplit("Naira Danile Magalhaes"))