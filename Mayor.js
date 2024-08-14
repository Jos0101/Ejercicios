const readline = require('readline');

const rl = readline.createInterface(
  process.stdin,
  process.stdout

);


 function maximoTres(n1,n2,n3){
    return Math.max(n1,n2,n3);

 };

 rl.question('Ingrese el número 1: ', (respuesta_1) => {
    rl.question('Ingrese el número 2: ', (respuesta_2) => {
        rl.question('Ingrese el número 3: ', (respuesta_3) => {

            const num_1 = parseFloat(respuesta_1);
            const num_2 = parseFloat(respuesta_2);
            const num_3 = parseFloat(respuesta_3);

            const maximo = maximoTres(num_1, num_2, num_3);

            console.log(`El número mayor entre: ${num_1}, ${num_2}, ${num_3} es ${maximo}`);

            rl.close();
        });
    });
});
