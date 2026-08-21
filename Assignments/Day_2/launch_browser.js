
function launchbrowser(browswerName){
        if("chrome"){
            console.log("this is chrome")
        } else if("msedge"){
            console.log("this is msedge")
        } else{
            console.log("using default browser")
        }
        }
function runtests(testType){
    switch(testType){
        case "smoke":
            console.log("smoke test is done")
            break;
        case "sanity":
            console.log("sanity is done")
            break;
        case "regression":
            console.log("regression is done")
            break;
        default:
            console.log("smoke is done")
            break;
    }
}
launchbrowser("msedge")
runtests("regression")