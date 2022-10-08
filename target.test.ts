import exp from "constants";
import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";

import { Target } from "./targetPageObjects";


const target = new Target()


test("ability to select a store", async() => {
//navigate to target.com
    await target.navigate()
    //click select store
    
    await target.click(target.mystoreBtn)
    //type location, Detroit, MI
    await target.click(target.lookUpBtn)
    await target.setInput(target.selectStoreInput, "Detroit, MI")
    //select nearest store (Dearborn)
    await target.click (target.setDearbornStore)
    // selected store should be Dearborn
    let mySetStore = target.getText(target.myStore)
    expect(mySetStore).toContain('Dearborn')

});

test('Ability to locate Black Owned Businesses Page via Categories Dropdown', async() => {
//navigate to Categories
 await target.click(target.categoriesDropDown)
//click Black Owned from dropdown 
await target.click(target.BlackOwnedDropDownSelection)
//expect current page to be truthy = BlackOwnedBusinesses Page
let currentPage = target.getElement(target.BlackOwnedPage)

expect(currentPage).toBeTruthy

});

test('Ability to select and add a BOGO 50% off costume to cart', async() => {

    //search "Adult Bogo Costume"
await target.click(target.searchbar)

await target.sendKeys(target.searchbar, 'Adult Bogo Costume')

await target.click(target.enterSearch)
    //add velevet cape
await target.click(target.addVelvetCape)
    //navigate to cart
await target.click(target.viewCartAndCheckoutBtn)
    //expect cart to include velvet cape
 expect(target.cartItem).toContain('Adult Velvet Black Halloween Costume Cape - Hyde & EEK! Boutique™')
});

//Test below is separted from earlier test to show the act of searching works appropriately when completeing a taskk in between

test('Ability to locate Black Owned Businesses Page by searching', async() => {
    //search "Black Owned" 
    await target.click(target.searchbar)
    await target.sendKeys(target.searchbar, 'Black Owned')
    //expect current page to be truthy = BlackOwnedBusinesses Page
    let currentPage = target.getElement(target.BlackOwnedPage)
    expect(currentPage).toBeTruthy
  });

test('Ability to search Baby coustumes', async() => {

    //search "Baby Costumes"
    await target.click(target.searchbar)
    await target.sendKeys(target.searchbar, 'Baby Costumes')
    //Expect Results to display "Baby Costumes"

});
