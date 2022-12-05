export const SignupAuth = async (authRes, firebase, name) => {
  // If user signed up with email, then set their display name
  const isEmailSignup = authRes.additionalUserInfo.providerId === "password";
  console.log(isEmailSignup);
  if (isEmailSignup && name) {
    let curUser = await firebase.auth().currentUser;

    await curUser
      .updateProfile({
        displayName: name,
      })
      .catch((err) => {
        fetchFailure(err);
      });
  }

  //Get Auth id token from Firebase
  let token = await firebase
    .auth()
    .currentUser.getIdToken()
    .catch((err) => {
      fetchFailure(err);
    });

  //server firebase authentication, returns jwt token
  let username = authRes.user.displayName ? authRes.user.displayName : name;
  let email = authRes.user.email;

  let authData = { email, username, token };
  let authServerRes = await axios
    .post(`/auth/signup`, authData)
    .catch((err) => {
      fetchFailure(err);
    });

  //extract user id from jwt token
  let jwt_token = authServerRes.data.token;

  let userId = validToken.user;
  let username = authRes.user.displayName;
  let id = userId;
  let photo = authRes.user.photoURL;
  let provider = authRes.user.providerData[0].providerId;

  let user = {
    email,
    username,
    id,
    photo,
    provider,
    jwt_token,
  };

  LogIn(user);
};
