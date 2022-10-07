import {By, Builder, Capabilities, WebDriver, until} from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome';
import { Target } from "./targetPageObjects";


const target = new Target()


test('ability to select a store'), async() => {
//navigate to target.com
await target.navigate()
//click select store
await target.click(target.mystoreBtn)
//type location, Detroit, MI
await target.setInput(target.lookUpBtn, 'Detroit, MI')
//select nearest store (Dearborn)
await target.setDearbornStore
// selected store should be Dearborn
let mySetStore = target.getText(target.myStore)
expect(mySetStore).toBe('Dearborn')

}

test('Ability to locate Black Owned Businesses Page'), async() => {

}

test('Ability to locate Black Owned Businesses Page by searching'), async() => {

}

test('Ability to select and add a BOGO 50% off costume to cart'), async() => {

}

test('Ability to search baby costumes'), async() => {

}

afterAll(async () => {
    await target.driver.quit()
})