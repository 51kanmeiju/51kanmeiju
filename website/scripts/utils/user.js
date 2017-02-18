export function isLogged(user) {
  if (user && user.user && user.user.name != '') return true;
  return false;
}