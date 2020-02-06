class HelloWorld {
    firstName = '';
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName);
    }

}

const myHelloClassInstance = new HelloWorld('Isaac' , 'Garcia');
myHelloClassInstance.sayHello();

greet() {
    console.log('Isaac Garcia');
}