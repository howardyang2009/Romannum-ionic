class HomePage {
    private readonly num1selector = '#num1 input';
    private readonly num2selector = '#num2 input';
    private readonly calcbuttonselector = '#calc-button';
    private readonly sumselector = '#sum input';
    private readonly messageselector = '#message';
    private readonly romannumsamplebuttonselector = '#sample-button';

    constructor() {}

    navigateTo() {
        cy.visit('tabs/home')
    }

    setNum1(romannum1: string) {
        cy.get(this.num1selector).type(romannum1, {force: true})
    }
    getNum1() {
        return cy.get(this.num1selector)
    }

    setNum2(romannum2: string) {
        cy.get(this.num2selector).type(romannum2, {force: true})
    }
    getNum2() {
        return cy.get(this.num2selector)
    }

    clickCalculateButton() {
        cy.get(this.calcbuttonselector).click({force: true});
    }

    getSum() {
        return cy.get(this.sumselector)
    }

    getMessage() {
        return cy.get(this.messageselector)
    }

    clickRomannumSampleButton() {
        cy.get(this.romannumsamplebuttonselector).click({force: true});
    }
}

export default HomePage