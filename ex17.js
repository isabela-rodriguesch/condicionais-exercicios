
const valorDoProduto = 1000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const parcelasPagas = 3;

if (valorPago < valorDoProduto) {
    const cadaParcela = valorDoProduto / quantidadeDoParcelamento;
    const restoParcelas = quantidadeDoParcelamento - parcelasPagas;
    console.log(`Restam ${restoParcelas} parcelas de R$ ${cadaParcela}`)
}