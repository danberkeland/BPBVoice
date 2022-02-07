
import { Auth } from "aws-amplify";



export const userInfoCheck = async () => {
    const user = await Auth.currentAuthenticatedUser()
    console.log("user",user)
    return user
  }