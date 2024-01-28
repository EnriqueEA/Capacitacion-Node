function suma(a, b) {
   console.log(this);
   return a + b;
}

const suma2 = (a, b) => {
   console.log(this);
   return a + b;
}

const suma3 = (a, b) => a + b

exports.utils = {
   suma,
   suma2,
   suma3
};
