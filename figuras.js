
// Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
} 

perimetroCuadrado()

function areaCuadrado(lado) {
    return lado**2;
} 

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};


function areaTriangulo(base, altura) {
    return (base * altura)/ 2;
}

console.groupEnd();

// Codigo del triangulo isosceles
console.group("Triangulo Isosceles");
    function alturaTriIsosceles(ladoA1, ladoA2, base) {
        if (ladoA1 === ladoA2 && ladoA1 != base)
        {
            console.log("Es un triangulo isosceles")
            let altura = Math.sqrt(ladoA1**2 - base**2/4);
            return "La altura de tu triangulo es: " + altura + "cm";
        }
        else {console.log("Es otro tipo de triangulo")}
    }
console.groupEnd();

// Codigo del Circulo 
console.group("Circulos");

// Radio
const radioCirculo = 4;

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
} 

// PI
const PI = Math.PI;

// Circumferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return PI * diametro;
}

// Area
function areaCirculo(radio) {
    return PI * radio**2;
}  
console.groupEnd(); 

// Aqui interacturamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}