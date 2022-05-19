function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        iniciar(){
            this.AcoesCalculator();
            this.pressionaEnter();
        },
        AcoesCalculator(){
            document.addEventListener('click', e =>{
                const el = e.target
                //console.log(el.classList.contains('btn-num'))
                if(el.classList.contains('btn-num')){
                    this.display.value += el.innerText
                    this.display.focus()
                }
                if(el.classList.contains('btn-eq')){
                    const valores = this.display.value
                    this.efetuarConta(valores)
                }
                if(el.classList.contains('btn-del')){
                    const valores = this.display.value
                    this.removerUltimoCaractere(valores)
                }
                if(el.classList.contains('btn-clear')){
                    this.limparDisplay()
                }
            })
        },
        efetuarConta(valores){
            var str = valores.replace(/[^-()\d/*+.]/g, '');
            this.display.value = eval(str) //eval converte uma string em especifico aqui no projeto uma "conta com string" em um "conta com numero"
        },
        removerUltimoCaractere(valores){
            var menosUltimaStr = valores.substring(0, valores.length -1)
            this.display.value = menosUltimaStr
        },
        limparDisplay(){
            const limpo = this.display.value = ''
            return limpo
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                console.log(e.keyCode)
                const valores = this.display.value
                this.efetuarConta(valores);
              }
            });
          },
    }
}
const calculadora = criaCalculadora()
calculadora.iniciar()