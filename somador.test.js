const somador = require('./somador');

test('2 + 2 é igual a 4', () => {
    expect(somador.somar(2,2)).toBe(4);
})

test('Soma de -2 e -2 é -4', () => {
    expect(somador.somar(-2,-2)).toBe(-4);
});

//adicionado depois para avaliar a cobertura
test('Soma de 0 e 0 é 0', () => {
    expect(somador.somar(0,0)).toBe(0);
});