const VerifyLogin = async () => {
  const isLogged = await localStorage.getItem('isLogged')

  if (isLogged === '' || isLogged === undefined || isLogged === null || isLogged === 'false') {
    return false
  } else {
    return true
  }
}

export default VerifyLogin
