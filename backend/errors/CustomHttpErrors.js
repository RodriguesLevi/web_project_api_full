class CustomHttpErrors extends Error {
  constructor({ message, typeError, statusCode = 404 }) {
    super(message);
    this.typeError = typeError;
    this.statusCode = statusCode;
  }
}
export { CustomHttpErrors };
