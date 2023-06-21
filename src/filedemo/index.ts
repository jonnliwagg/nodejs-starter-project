import * as fs from 'fs';

export function blocking() {
    console.log('~~ before read sync');
    const data = fs.readFileSync(
        'C:/Users/liwjo/Downloads/Bootcamp 2 Files/message.txt'
    );
    console.log('~~ after read sync', data.toString());
    console.log('~~ end');
}

export function nonBlocking() {
    console.log('~~ before read sync');
    fs.readFile(
        'C:/Users/liwjo/Downloads/Bootcamp 2 Files/message.txt',
        function (error, data) {
            if (error) {
                console.error('error reading file', error);
                return;
            }
            console.log('~~ message.txt', data.toString());
        }
    );
    console.log('~~ after read sync');
    console.log('~~ end');
}
