
const readline = require('readline');

const rl = readline.createInterface(
  process.stdin,
  process.stdout

);

const gradosF = function(gradosC){
    
    return (gradosC * 9/5) + 32
    
}

 rl.question("Ingrese la temperatura en grados Celsius: ", (respuesta) => {
    const celcius = parseFloat(respuesta);
      const fahrenheit = gradosF(celcius);
    
         console.log(`${celcius}°C es igual a: ${fahrenheit}°F`);
    
     rl.close();
     
});

