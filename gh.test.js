let page;
jest.setTimeout(500_000);
beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  }, 80000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 55000);
});

test("Featers/Actions  - the h1 header content'", async () => {
  await page.goto("https://github.com/features/actions");
  await page.waitForSelector("h1");
  const title1 = await page.title();
  expect(title1).toEqual("GitHub Actions · GitHub");
}, 80000);

test("Pricing - the h1 header content'", async () => {
  await page.goto("https://github.com/pricing");
  await page.waitForSelector("h1");
  const title3 = await page.title();
  expect(title3).toEqual("Pricing · Plans for every developer · GitHub");
}, 70000);

test("Features/Copilot - the h1 header content'", async () => {
  await page.goto("https://github.com/features/copilot");
  await page.waitForSelector("h1");
  const title4 = await page.title();
  expect(title4).toEqual("GitHub Copilot · Your AI pair programmer · GitHub");
}, 60000);

