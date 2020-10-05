const fs = require('fs');
const { pipeline } = require('stream');
const cipher = require('./cipher');
const transformStream = require('./transformStream');

const commands = require('./commander');
const { action, shift, input, output } = commands.opts();
const readStream = input ? fs.createReadStream(input) : process.stdin;
const writeStream = output ? fs.createWriteStream(output, { flags: 'a+' }) : process.stdout;
const transform = new transformStream(cipher, action, shift);

pipeline(readStream, transform, writeStream, error => {
    error ? console.error('Caesar cipher failed.', error) : console.log('Caesar cipher succeeded.');
});
