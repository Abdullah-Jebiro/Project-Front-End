/// <reference path="./person.ts" />

class player implements Person {
    name: string;
    age: string;
    formatName() {
        return this.name.toUpperCase();
    }
}