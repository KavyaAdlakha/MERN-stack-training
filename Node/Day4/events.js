import {EventEmitter} from 'events'; // use import for Es modules

//-------------on event

//create an instance of EventEmitter
const myEvent = new EventEmitter();

//setup an event listner for the 'greet' event
myEvent.on('greet',(name) => {
    console.log(`Hello, ${name}`);
})

//Emit the 'greet' event it will work of print the event
myEvent.emit('greet','Node.js')


//-------------Once event
const myEmitter = new EventEmitter();

myEmitter.once('event',() => {
    console.log('THis will be called once')
});

myEmitter.emit('event'); //this will run one time only
myEmitter.emit('event');


//-----------remove listner event

const greetListner = (name) =>{
    console.log(`Hello, ${name}`)
};

myEmitter.on('greet', greetListner);
myEmitter.removeListener('greet', greetListner);
myEmitter.emit('greet','world') // no output, as the listner has been removed