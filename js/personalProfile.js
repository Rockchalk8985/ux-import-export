export class Person {
    constructor(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }
}


export function render(person) {
    return `
        <div class="profile shadow">
            <img src="./Images/${person.imageUrl}"/>
            <h2>${person.name}</h2>
        </div>
    `
}