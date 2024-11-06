import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();

const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithRedirect(auth, provider);
};

export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return { user, token };
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    return { errorCode, errorMessage, email, credential };
  }
};
