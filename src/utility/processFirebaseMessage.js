import removeFirebasePrefix from "./removeFirebasePrefix";

const processMessage = (message) => {
    message = removeFirebasePrefix(message)

    if(message.includes("wrong-password")) {
        return "Wrong Password"
    }
    if(message.includes("user-not-found")) {
        return "Incorrect Email"
    }
    if(message.includes("weak-password")) {
        return "Weak Password"
    }
    if(message.includes("email-already-in-use")) {
        return "Email is already in use"
    }
    if(message.includes("missing-email")) {
        return "Enter an Email"
    }

    return message
};
  
export default processMessage