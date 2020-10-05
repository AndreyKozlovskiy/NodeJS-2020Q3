# NodeJS-2020Q3
## Task 1. Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Details:**

1. For command-line arguments could be used one of

- [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
- [https://www.npmjs.com/package/minimist](https://www.npmjs.com/package/minimist)
  or any other module.

2. Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
3. If the input file is missed - use stdin as an input source.
4. If the output file is missed - use stdout as an output destination.
5. If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.
6. If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
7. For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

**How to use:**

1. npm install commander.
2. npm index.js --help - all list of commands
3. Examples:

```bash
$ node index.js -a encode -s 9
```

```bash
$ node index.js -a encode -s 10 -i "./files/in.txt"
```

```bash
$ node index.js -a encode -s 8 -i "./files/in.txt" -o "./files/out.txt"
```

```bash
$ node index.js --action encode --shift 10
```

```bash
$ node index.js --action encode --shift 13 --input "./files/in.txt"
```

```bash
$ node index.js -a encode -s 12 -i "D:/in.txt" -o "D:/out.txt"
```

```bash
$ node index.js -a encode -s 8 -i C:/in.txt -o C:/out.txt
```

```bash
$ node index.js --action encode --shift 9 --input "./files/in.txt" --output "./files/out.txt"
```

```bash
$ node index.js -a encode -s 10 -i "./files/input.txt" -o "./files/out.txt"
```

```bash
$ node index.js -a encode -s 12 -i ./files/input.txt" -o ./files/out.txt
```