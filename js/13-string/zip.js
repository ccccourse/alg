import * as Z from 'https://deno.land/x/littlezip/mod.ts'

const zip = await Z.compress('./test/','./test.zip')
// console.log(zip.entries())

//extract. functional, but under development.
const file = await Deno.open('test.zip');
await Deno.mkdir('./test2');

for (const { filename, index, extract } of Z.get_entries(file)) {
    const file = await Deno.create('test2/' + filename);
    const content = await extract();
    file.writeSync(content);
}
