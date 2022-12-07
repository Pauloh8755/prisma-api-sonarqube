const formatResponseError = (res, error, code) => {
  if (error.message && error.code && error.status) {
    return res.status(error.status).json({
      code: error.code,
      error: error.message
    })
  }
  return res.status(400).json({
    code,
    error: error.message
      ? error.message.substring(error.message.indexOf('invocation:') + 11, error.message.length).replace(/\n/g, '')
      : `invalid request, check the structure of the request`
  })
}

export { formatResponseError }
