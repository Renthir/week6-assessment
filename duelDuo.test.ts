
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
    await driver.sleep(500)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('', () => {
    test('Clicking draw brings up choice cards', async () => {
        const drawBtn = await driver.findElement(By.id('draw'))
        const choices = await driver.findElement(By.id('choices'))

        await drawBtn.click()
        await driver.sleep(500)
        let displayed = await choices.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('Choosing a card shows player duo', async () => {
        // const choices = await driver.findElement(By.id('choices'))
        const botBtn = await driver.findElement(By.xpath(`//div[@id="choices"]/div/button[@class='bot-btn']`))
        const playerDuo = await driver.findElement(By.id('player-duo'))

        await botBtn.click()
        await driver.sleep(500)
        let displayed = await playerDuo.isDisplayed()
        expect(displayed).toBe(true)
    })
})