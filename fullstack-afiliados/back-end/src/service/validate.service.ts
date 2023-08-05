import { ValidationError, ValidatorOptions, validate } from "class-validator";
import { User } from "../entities/users/user.entity";
import { ErrorObject } from "../common";

export class ValidateService {
  validateOptions: ValidatorOptions = {
    skipMissingProperties: false,
    whitelist: true,
    enableDebugMessages: true,
    validationError: {
      value: true,
    },
  };

  async validateUser(newUser: Object) {
    try {
      const validatorResult = await validate(newUser, this.validateOptions);
      if (validatorResult.length) {
        const errormessage =  this.createErrorMessage(validatorResult);
        return Promise.reject(ErrorObject(errormessage, new Error()))
      }

      return Promise.resolve(newUser);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  createErrorMessage(validatorResult: ValidationError[]): string {
    const errorArray = validatorResult.map((e) => e.constraints);
    let errorArrayString: string[] = [];

    errorArray.forEach((errorObj) => {
      for (const prop in errorObj) {
        errorArrayString.push(errorObj[prop]) 
      }
    });

    const allErrorString = errorArrayString.join(' e ') + '.'
    return allErrorString
    
  }
}

export default new ValidateService();
