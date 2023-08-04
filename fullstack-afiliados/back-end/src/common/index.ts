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

export function ErrorObject(mensagem: string, erro: Error) {
  return {
    obj: new ErrorRequestBuilder()
      .setErrorMessage(mensagem)
      .setError(erro)
      .build(),
    status: 400,
  };
}
