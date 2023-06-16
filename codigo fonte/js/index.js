/**
 * @description Esta funcao deve ser incluida no onload para settar o comprimento dimensoes do body para
 * igual as dimensoes dimensoes internas..
 */
let setInnerSizeInBody = (()=>{ 
   window.document.body.style.width = window.innerWidth + "px"; 
   window.document.body.style.height = window.innerHeight + "px";     
});

/**
 * 
 * @param {*} elementoTemporizador  elemento cujo conteudo vai ser colocado nao forma dd-mm-aa hh:mm:ss
 * @description esta funcao altera o conteudo de um elemento HTML passado por paremetro de modo que o seu valor seja a data e hora atual
 */
let AtualizarTemporizador = ((elementoTemporizador) => {
        setInterval(() =>{
        let now = new Date();
        let horaEDataAtualFormatada = (ts, ds) => {
            let dia = formatarParaDoisDigitos(now.getDay());
            let mes = formatarParaDoisDigitos(now.getMonth());
            let ano = now.getFullYear();
            let segundos = formatarParaDoisDigitos(now.getSeconds());
            let minutos = formatarParaDoisDigitos(now.getMinutes());
            let horas = formatarParaDoisDigitos(now.getHours())

            return dia + ds + mes + ds + ano + " "
            + horas + ts + minutos+ ts + segundos;
        } 
        let formatarParaDoisDigitos = (num) => {
                if(Number.parseInt(num)  > 10 || Number.parseInt(num) < 0 || isNaN(num)) return num;
                else return new String().concat("0", num).toString();
        }

        elementoTemporizador.innerText = horaEDataAtualFormatada (":", "-")},
        1000); 
});    