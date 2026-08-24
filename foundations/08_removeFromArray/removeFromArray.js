const removeFromArray = function(array, ...items) {
    return array.filter(function(elemento) {
        return !items.includes(elemento);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
