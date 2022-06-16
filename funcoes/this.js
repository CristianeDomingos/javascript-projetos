function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Cristiane',
	idade: 26,
};

const pessoa2 = {
	nome: 'Thaina',
	idade: 21,
};

const pessoa3 = {
	nome: 'Antonia',
	idade: 25,
};
const animal = {
	nome: 'Demi',
	idade: 2,
    raca: 'PorquinhoDaIndia',
};

console.log(calculaIdade.apply(pessoa1, [37]));
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
console.log(calculaIdade.apply(animal, [4]));