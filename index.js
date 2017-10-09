#!/usr/bin/env node

const colors  = require( 'colors' );
const verify  = require( './verify' );
const branch  = process.argv[3];
const pattern = process.argv[2];

if ( !pattern || !pattern.match(/-p=/) ) {
	console.log( 'Pattern is not defined'.red );
	process.exit( 1 );
}

if ( !branch ) {
	console.log( 'Branch is not defined'.red );
	process.exit( 1 );
}

if ( !verify( branch, pattern.replace( '-p=', '' ) ) ) {
	console.log( 'Your branch is not valid, use the pattern'.red );
	process.exit( 1 );
}

console.log( `Your branch: '${branch}' is valid`.green );


