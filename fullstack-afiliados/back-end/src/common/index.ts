import { Error_Object } from "./types";

export class ErrorRequest {
  errorMessage: string;
  error: string;

  constructor(errorMessage: string, error: string) {
    this.errorMessage = errorMessage;
    this.error = error;
  }
}

export class ErrorRequestBuilder {
  errorMessage?: string;
  error?: string;

  setErrorMessage(errorMessage: string): ErrorRequestBuilder {
    this.errorMessage = errorMessage;
    return this;
  }

  setError(error: Error): ErrorRequestBuilder {
    this.error = error.toString();
    return this;
  }

  build(): ErrorRequest {
    if (!this.errorMessage || !this.error) {
      throw new Error("Error message and error must be set before building.");
    }
    return new ErrorRequest(this.errorMessage, this.error);
  }
}

export function ErrorObject(mensagem: string, erro: Error | Error_Object) {
  if (erro instanceof Error) {
    return {
      obj: new ErrorRequestBuilder()
        .setErrorMessage(mensagem)
        .setError(erro as Error)
        .build(),
      status: 400,
    };
  } else {
    return {
      obj: erro.obj,
      status: erro.status,
    };
  }
}

export function DatabaseErrorhandling(error: Error) {
  const stringError = error.toString();
  if (stringError.includes("Duplicate") && stringError.includes("@")) {
    return ErrorObject("Esse email já está em uso", new Error());
  }
}
