class ResponseError extends Error {
  constructor(options) {
    super(options.message, { cause: options.error ? options.error : null })
    this.status = options.status
    this.message = options.message
    this.code = options.code
  }
}

export { ResponseError }
