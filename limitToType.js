// A namespace defined for the sample code
// As a best practice, you should always define 
// a unique namespace for your libraries
// Based on https://learn.microsoft.com/de-de/power-apps/developer/model-driven-apps/clientapi/walkthrough-write-your-first-client-script 
var LimitToType = window.LimitToType || {};
(function () {
    // Define global variables
    var myUniqueId = "_myLimitToAccountId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var errorMessage = currentUserName + ": JavaScript code failed!";


    // Code to run in the form OnLoad event
    // executionContext: execution context (checkbox in UI)
    // fieldName:  the logical name of the field
    // fieldLimitationType: the entity type you want to see (only 1)

    this.formOnLoad = function (executionContext, fieldName, fieldLimitationType) {
        try {
            var formContext = executionContext.getFormContext();
            formContext.getControl(fieldName).setEntityTypes([fieldLimitationType]);
        } catch (e) {
            formContext.ui.setFormNotification(errorMessage, "ERROR", myUniqueId);
        }
    }

}).call(LimitToType);