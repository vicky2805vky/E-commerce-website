export const getFirebaseErrorMessage = (error) => {
  const errorMessages = {
    "auth/invalid-email": "Invalid email address. Please check.",
    "auth/user-not-found": "No account found. Please register.",
    "auth/user-disabled": "Your account is disabled. Contact support.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/email-already-in-use": "Email already in use. Please log in.",
    "auth/weak-password": "password must contain atleast 6 characters",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/operation-not-allowed": "Operation not allowed. Contact support.",
    "auth/missing-phone-number": "Phone number is required.",
    "auth/invalid-verification-code": "Invalid verification code.",
    "auth/missing-verification-code": "Verification code is required.",
    "auth/invalid-action-code": "Invalid or expired action code.",
    "auth/captcha-check-failed": "Captcha verification failed.",
    "auth/invalid-recipient-email": "Invalid recipient email address.",
    "auth/user-cancelled": "Operation cancelled. Try again.",
    "auth/account-exists-with-different-credential":
      "Account exists with a different credential.",
    "auth/user-mismatch": "Please Enter your correct Email",
  };

  const errorCode = Object.keys(errorMessages).find((code) =>
    error.includes(code)
  );

  return errorCode ? errorMessages[errorCode] : error;
};
