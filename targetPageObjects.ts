import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";




export class Target extends BasePage {

    mystoreBtn: By = By.id("web-store-id-msg-btn")
    selectStoreInput: By = By.id("zip-or-city-state")
    lookUpBtn: By = By.xpath("//button[text()='Look up']")
    setDearbornStore: By = By.xpath("//button[@aria-label='Set Dearborn as my store']")
    myStore: By = By.xpath("//*[@id='web-store-id-msg-btn']/div[2]/div")
   
    bogoDealBtn: By = By.xpath("//a[@data-lnk='C_BOGOCostumes_HP']")
  
    addFoxCostume: By = By.xpath("//button[@aria-label='Add Adult Fox Halloween Costume Accessory Set - Hyde & EEK! Boutique™ to cart']")             
    addFoxCostumeToCart: By = By.xpath("//button[aria-label='Add to cart for Adult Fox Halloween Costume Accessory Set - Hyde & EEK! Boutique™']")
    //cartIconNumber: By: By = 


    velvetCape: By = By.xpath("//a[text()='Adult Velvet Black Halloween Costume Cape - Hyde & EEK! Boutique™']")
    addVelvetCape: By = By.xpath("//button[@aria-label='Add Adult Velvet Black Halloween Costume Cape - Hyde & EEK! Boutique™ to cart']")
    addToCartBtn: By = By.xpath("//button[text()='Add to cart']")

    continueShoppingBtn: By = By.xpath("//button[text()='Continue shopping']")
    

  
    constructor() {
        super({url: 'https://www.target.com'})
}

}