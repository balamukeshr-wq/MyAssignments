class LoginTest{
    public browserName: string = 'Chrome'
    private password: string ='admin123'
    protected userName: string= 'tester'



public openApplication(){
    console.log('opening Application')
}
public login(browserName: string = this.browserName, userName: string = this.userName, password: string = this.password){
    console.log('Login to Application using browser',this.browserName);
    console.log('Login to Application using userName',this.userName);
    console.log('Login to Application using password',this.password);
}
}
const loginTest = new LoginTest();
loginTest.openApplication();
loginTest.login();
