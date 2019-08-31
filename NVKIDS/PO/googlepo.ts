import { element, by } from "protractor";

export class googlepo{
    public static searchbar =element(by.name('q'))


    public static searchbymethod(){

        return element(by.name('q'))

    }
}