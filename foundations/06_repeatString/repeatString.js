const repeatString = function(string, num) {
  let resultado = '';
if (num < 0 ) {
    return "ERROR";
}
  for (let i = 0; i < num; i++) {
    resultado = resultado + string;
  }

  return resultado;
};

// No edites nada debajo de esta línea
module.exports = repeatString;