import firebase from "firebase/compat/app";
var md5 = require("md5");

export  function getAvatarUrl(email: string) {

  if (email) {
    const trimedEmail = email.trim().toLowerCase();
    const emailHash = md5(trimedEmail);
    return `https://www.gravatar.com/avatar/${emailHash}?s=100&d=identicon&r=pg`;
  }
}
