var LoginTest = /** @class */ (function () {
    function LoginTest() {
        this.browserName = 'Chrome';
        this.password = 'admin123';
        this.userName = 'tester';
    }
    LoginTest.prototype.openApplication = function () {
        console.log('opening Application');
    };
    LoginTest.prototype.login = function (browserName, userName, password) {
        if (browserName === void 0) { browserName = this.browserName; }
        if (userName === void 0) { userName = this.userName; }
        if (password === void 0) { password = this.password; }
        console.log('Login to Application using browser', this.browserName);
        console.log('Login to Application using userName', this.userName);
        console.log('Login to Application using password', this.password);
    };
    return LoginTest;
}());
var loginTest = new LoginTest();
loginTest.openApplication();
loginTest.login();
