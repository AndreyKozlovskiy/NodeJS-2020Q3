const { program } = require('commander');
const fs = require('fs');

program.storeOptionsAsProperties(false)
        .requiredOption('-a, --action <type>', 'an action encode/decode')
        .requiredOption('-s, --shift <number>', 'a shift')
        .option('-i, --input <file>', 'an input file')
        .option('-o, --output <file>', 'an output file');

program.parse(process.argv);

const { action, shift, input, output } = program.opts();

if (action !== 'encode' && action !== 'decode') {
    process.stderr.write(
        'ERROR: Invalid parameter! Please, write encode or decode\n' +
        'ОШИБКА: Неверный параметр! Пожалуйста, введите encode или decode\n'
    );
    process.exit(1);
}

if (!Number.isInteger(+shift) || +shift < 0) {
    process.stderr.write(
        'ERROR: Invalid parameter! Please, write positive number\n' +
        'Ошибка: Неверный параметр! Пожалуйста, введите положительное число\n'
    );
    process.exit(1);
}

try {
    if(input) {
        fs.accessSync(input);
    }
}
catch (exception) {
    process.stderr.write(
        'ERROR: input file not exist OR You don\'t have access rights to it!\n' +
        'Ошибка: Такого input файла не существует ИЛИ Вы не имеете прав доступа к нему!\n'
    );
    process.exit(1);
}

try {
    if(output) {
        fs.accessSync(output);
    }
}
catch (exception) {
    process.stderr.write(
        'ERROR: Output file not exist OR You don\'t have access rights to it!\n' +
        'Ошибка: Такого output файла не существует ИЛИ Вы не имеете прав доступа к нему!\n'
    );
    process.exit(1);
}

module.exports = program;