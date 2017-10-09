#!/usr/bin/env node

const colors  = require( 'colors' );
const verify  = require( './verify' );
const branch  = process.argv[3];
const pattern = process.argv[2];

if ( !pattern || !pattern.match(/-p=/) ) {
	console.log( 'pattern is not defined'.red );
	process.exit( 1 );
}

if ( !branch ) {
	console.log( 'branch is not defined'.red );
	process.exit( 1 );
}

if ( !verify( branch, pattern.replace( '-p=', '' ) ) ) {
	console.log( 'branch is not valid user pattern'.red );
	process.exit( 1 );
}

console.log( `branch: '${branch}' is valid`.green );


