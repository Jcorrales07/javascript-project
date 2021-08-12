// const precioOriginal = 1210;
// const descuento = 35;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

const cupones = [
    "Cupon especial",
    "Cupon de verano",
    "Cupon de 30%",
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;
    return precioConDescuento;
}

 
function calcularPrecio() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;
    if (!cupones.includes(cuponValue)) {
        alert("El cupon " + cuponValue + " NO es valido");
    } else if (cuponValue === "Cupon especial") {
        descuento = 65;
    } else if (cuponValue === "Cupon de verano") {
        descuento = 45;
    } else if (cuponValue === "Cupon de 30%") {
        descuento = 30;
    }

    // switch (cuponValue) 
    // {
    //     case "Cupon especial":
    //         descuento = 65;
    //     break;
    //     case "Cupon de verano":
    //         descuento = 40;
    //     break;
    //     case "Cupon de 30%":
    //         descuento = 30;
    //     break;
    //     default:
    //         descuento = 0;
    //     break;
    // }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("Resultprice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

if (!cupones.includes(cuponValue)) {
    alert("El cupon " + cuponValue + "NO es valido");
} else if (cuponValue === "Cupon especial") {
    descuento = 65;
} else if (cuponValue === "Cupon de verano") {
    descuento = 45;
} else if (cuponValue === "Cupon de 30%") {
    descuento = 30;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });