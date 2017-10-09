#!/usr/bin/env node

const colors  = require( 'colors' );
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

if ( branch.match(/^(master|apikihomolog|apikiprojeto)$/) ) {
	console.log( `branch: ${branch} is valid`.green );
	process.exit( 0 );
}

if ( !branch.match( new RegExp( pattern.replace( '-p=', '' ) ) ) ) {
	console.log( 'branch is not valid user pattern'.green );
	process.exit( 1 );
}

console.log( `branch: ${branch} is valid`.green );
