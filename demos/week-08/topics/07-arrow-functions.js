function sum1( x, y ) {
    return x + y;
}

console.log( sum1( 12, 13 ) );

const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );

// arrow function
const sum3 = ( x, y ) => {
    return x + y;
};

console.log( sum3( 12, 13 ) );

// single line return statement functions
const sum4 = ( x, y ) => x + y;

console.log( sum4( 12, 13 ) );

// single argument functions do not need () around the argument
const square = x => x * x;
console.log( square( 12 ) );