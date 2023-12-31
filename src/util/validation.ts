namespace App {
//Validation
export interface Validatable {
    value: string | number;
    required?: boolean; //optional
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}
export function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
    
        isValid = isValid && validatableInput.value.toString().trim().length !== 0
    }

    //minLength
    if (validatableInput.minLength != null && 
        typeof validatableInput.value === "string"
    ){
        
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength!;
    }


    //maxLength check
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string"
    ){
        
        isValid =
            isValid && validatableInput.value.length <= validatableInput.maxLength!;
    }

    //min
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    //max
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
}





}


