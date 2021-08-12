
//  ===================== Calculadora de medianas =====================
//  ============================================= Mediana General
const salariosHon = honduras.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosHonSorted = salariosHon.sort(
    function (salaryA, salaryB) {
       return salaryA - salaryB;
    }
);

// ====================== Helpers ======================
function esPar(numero) {
    return (numero % 2 === 0);  
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(

        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralHon = medianaSalario(salariosHonSorted);

//  Mediana del top 10%

const spliceStart = (salariosHonSorted.length * 90) / 100;
const spliceCount = salariosHonSorted.length - spliceStart;

const salariosHonTop10 = salariosHonSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTopHon = medianaSalario(salariosHonTop10);


console.log(
    medianaGeneralHon,
    medianaTopHon
)