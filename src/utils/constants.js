export const status = {
  SUCESS_OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
}

export const code = {
  /**
   * [UserController][error]: createUser()
   */
  CREATE_USER_ERROR: 'UCCU01',
  /**
   * [userController][error]: findUser()
   */
  FIND_USER_ERROR: 'UCFU01',
  /**
   * [userController][error]: findAllUsers()
   */
  FIND_ALL_USERS_ERROR: 'UCFAU01'
}

export const message = {
  USER_NOT_FOUNT: 'User not found',
  GENERIC_BAD_REQUEST: 'invalid request, check the structure of the request'
}
