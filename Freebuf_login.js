const { Builder, By, Key, until } = require('selenium-webdriver');

(async function login() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://account.tophant.com/login/")
        await driver.findElement({ xpath: '//*[@id="username"]' }).sendKeys("zhouhanghang")
        await driver.findElement({ xpath: '//*[@id="password"]' }).sendKeys("123456789")
        await driver.findElement({ xpath: '//*[@id="loginBtn"]' }).click();
        //等待时间
        await driver.sleep(1000 * 10)
        //打开漏洞盒子
        await driver.findElement({ xpath: '//*[@id="loginCenter"]/div/div/a[2]/div' }).click();
        //打开FreeBuf
        await driver.findElement({ xpath: '//*[@id="loginCenter"]/div/div/a[3]/span' }).click();
        //打开网藤
        await driver.findElement({ xpath: '//*[@id="loginCenter"]/div/div/div/div/div/div/a' }).click();
        //窗口切换
        let windowshandles = await driver.getAllWindowHandles()
        await driver.switchTo().window(windowshandles[1])
        await driver.sleep(1000 * 30)
    } finally {
        await driver.quit();
    }

})();


