export default class Book {
    constructor(readonly title: string, readonly author: string) {

    }

    getTitle() {
        return this.title;
    }
}