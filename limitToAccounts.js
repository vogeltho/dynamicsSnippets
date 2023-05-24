// A namespace defined for the sample code
// As a best practice, you should always define 
// a unique namespace for your libraries
var Example = window.Example || {};
(function () {
    // Define global variables
    var myUniqueId = "_myLimitToAccountId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var errorMessage = currentUserName + ": JavaScript code failed!";


    // Code to run in the form OnLoad event
    this.formOnLoad = function (executionContext) {
        try {
            var formContext = executionContext.getFormContext();
            formContext.getControl("customerid").setEntityTypes(["account"]);
        } catch (e) {
            formContext.ui.setFormNotification(errorMessage, "ERROR", myUniqueId);
        }
    }

}).call(Example);