// //-----------------------------------------Readable Streams example
// import fs from 'fs';

// //create a readable streasm ffrom a file
// const readableStream = fs.createReadStream('example.txt', {encoding: 'utf-8'});

// //kisten to thhe data event to read chunks of data
// readableStream.on('data', (chunk) => {
//     console.log('Recieved chunk:', chunk)
// });

// //handle end event when thee stream is fully consumed
// readableStream.on('end', () => {
//     console.log("finished reading the file")
// })

// //handle errors
// readableStream.on('error', (err) => {
//     console.error('Error reading file:', err)
// });

// //-------------------------------------------Writeable streams example

// // create a writable stream to afile
// const writableStream = fs.createWriteStream('output.txt')

// //write some data
// writableStream.write('Hello, this is a test\n')
// writableStream.write('writing to file  usinng stream\n')

// //end the stream
// writableStream.end(()=> {
//     console.log('finishhed writing to file')
// })

// //handlle errors
// writableStream.on('errors',(err) => {
//     console.log('error writing to file:', err)
// })

// --------------------------------------------Duplex streams eexample
import { Duplex } from 'stream';

 const echoSystem = new Duplex({
    write(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase()); //convert to uppercase and push to readable
        callback();
    },
    read(size){}
 });

 //write data to the writable side
 echoSystem.write('hello');
 echoSystem.write('world');
 echoSystem.end();

 ///Read from the readable side
 echoSystem.on('data',(chunk) => {
    console.log(`Echoed: ${chunk.toString()}`)
 });

 //------------------------------------Stream.pipe example
import fs from 'fs';
 //create readable and writable streams
 const readableStream = fs.createReadStream('example.txt')
 const writableStream = fs.createWriteStream('output.txt')

 // pipe data from example.txt to output.txt
 readableStream.pipe(writableStream);

 console.log('file has been copied')
