const rendaMensalEmCentavos = 3000;
const mesesDecorridos = 18;
const totalJaPagoPeloAluno = 18000; 

if (rendaMensalEmCentavos >= 2000 && mesesDecorridos < 60 && totalJaPagoPeloAluno < 18000) {
    const calculo = rendaMensalEmCentavos - (rendaMensalEmCentavos * (18/100));
    const parcela = rendaMensalEmCentavos - calculo;
    console.log(`O valor da parcela desse mês é R$ ${parcela} reais`)
} else if(rendaMensalEmCentavos < 2000) {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
} else if (mesesDecorridos > 60){
    console.log("Sua dívida está sanada pois já passaram 60 meses");
} else if (totalJaPagoPeloAluno >= 18000) {
    console.log("Seu curso está quitado!")
}