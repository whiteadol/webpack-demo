const envType = (process.env.NODE_ENV || 'dev').trim();
const esbuild = require('esbuild');
const fs = require('fs');

fs.readdir('./js/business', (err, files) => {
	if (err) throw err;
	console.log(`Build Mode : [${envType}]`);
	console.log(`Source : [ ${files.toString()} ]`);
	const buildOption = {
		nodePaths: ['/js/business'],
		entryPoints: files,
		entryNames: '[dir]/[name]',
		bundle: true,
		outdir: 'dist',
		platform: 'browser',
		allowOverwrite: true,
		minify: envType == 'dev' ? false : true,
		sourcemap: envType == 'dev' ? true : false,
		drop: envType == 'dev' ? [] : ['console', 'debugger'],
	};

	esbuild.build(buildOption);
});
