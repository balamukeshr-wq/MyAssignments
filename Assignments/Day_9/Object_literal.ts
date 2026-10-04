//  Create the object literal named testExecutionSummary
const testExecutionSummary = {
    suiteName: "Regression Test Suite",
    totalTests: 50,
    passedTests: 45,
    failedTests: 5,
    executionTime: "25m 45s"
};

//  Print all property values to the console
console.log("Suite Name:", testExecutionSummary.suiteName);
console.log("Total Tests:", testExecutionSummary.totalTests);
console.log("Passed Tests:", testExecutionSummary.passedTests);
console.log("Failed Tests:", testExecutionSummary.failedTests);
console.log("Execution Time:", testExecutionSummary.executionTime);

// Calculate and print the pass percentage
const passPercentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;
console.log(`Pass Percentage: ${passPercentage}%`);

// Check the failedTests count and print the execution status
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Status: Execution Successful");
} else {
    console.log("Execution Status: Execution Completed with Failures");
}
