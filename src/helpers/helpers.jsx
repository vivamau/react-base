/*export function CheckAuth() {
  let auth = JSON.parse(localStorage.getItem("auth"));
  var jwtDecode = require("jwt-decode");
  try {
    var tokenExp = jwtDecode(auth.token).exp * 1000;
    if (new Date() < new Date(tokenExp)) {
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  } catch {
    localStorage.clear();
    return false;
  }
}*/

export function CheckAuth() {
  return true;
}
