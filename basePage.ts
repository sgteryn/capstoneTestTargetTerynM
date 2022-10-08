import {By, Builder, Capabilities, WebDriver, WebElement, until} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
    driver: WebDriver;
    url: string = 'https://www.target.com'

    pageTitle: By = By.xpath("//h1[@data-test='page-title']")
    closeBtn: By = By.xpath("//button[@aria-label='close']")
    searchbar: By = By.id("search")
    enterSearch: By = By.xpath("//button[@aria-label='go']")
    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }

 async navigate() {
            await this.driver.get(this.url)
    }

 async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }

 async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }  

    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
            await input.clear()
            return input.sendKeys(keys);
        }

  async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
      }

  async getText(elementBy: By) {
       await this.driver.wait(until.elementLocated(elementBy))
       return this.driver.findElement(elementBy).getText()
    }

}
