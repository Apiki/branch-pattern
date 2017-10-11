module.exports = function(branch, pattern) {
	if ( branch.match( /^(master|apikihomolog|apikiprojeto|stage|homolog)$/ ) ) {
		return true;
	}

	if ( branch.match( new RegExp( pattern ) ) ) {
		return true;
	}

	return false;
}
