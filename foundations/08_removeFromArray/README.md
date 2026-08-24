# Ejercicio 08 - removeFromArray

Implementa una función que reciba un array y otros argumentos, elimine dichos argumentos del array original y devuelva el array resultante:

```javascript
removeFromArray([1, 2, 3, 4], 3); // debería eliminar el 3 y devolver [1, 2, 4]
```

Intenta utilizar algunos de los métodos integrados de los arrays para resolver este ejercicio.

## Pistas

La primera prueba de este ejercicio es bastante sencilla, pero hay algunos aspectos que conviene considerar (o buscar en Google) para las pruebas posteriores:

- Puedes modificar el array original que pasas a la función o crear un nuevo array para devolverlo como resultado; en cualquier caso, la función debe devolver el array resultante.
- Cómo eliminar un único elemento de un array.
- Cómo gestionar múltiples argumentos opcionales en una función de JavaScript.
- Para más información, consulta la página de MDN sobre [argumentos de funciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments); desplázate hacia abajo hasta la sección sobre `Array.from` o el operador de propagación (*spread operator*). También puedes consultar la página de MDN sobre [parámetros rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

# Exercise 08 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array, and returns the resulting array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

See if you can make use of some built-in array methods in this exercise.

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- You can manipulate the original array you pass into the function call or create a new array that is returned as the result, but the function should return the resulting array regardless of the approach.
- How to remove a single element from an array
- How to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
