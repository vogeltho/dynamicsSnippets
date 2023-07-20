function removeOptionsFromSalutationList(executionContext, optionsetValueList){
	var formContext = executionContext.getFormContext();
	var values = optionsetValueList.split(';');
    values.forEach(value => {
        formContext.getControl('is_module_salutationlist').removeOption(parseInt(value));
    });
}