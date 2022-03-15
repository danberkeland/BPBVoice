
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listAuthSettingss } from "../graphql/queries";
import { sortAtoZDataByIndex } from "./sortDataHelpers";

const fetchUsers = async () => {
  try {
    const userData: any = await API.graphql(
      graphqlOperation(listAuthSettingss, {
        limit: "1000",
      })
    );
    const userList: any = userData.data.listAuthSettingss.items;
    sortAtoZDataByIndex(userList, "businessName");
    let noDelete = userList.filter((user) => user["_deleted"] !== true);

    return noDelete;
  } catch (error) {
    console.log("error on fetching Cust List", error);
  }
};

export const userInfoCheck = async () => {
    let userList = await fetchUsers()
    const user = await Auth.currentAuthenticatedUser()
    let ind = userList.findIndex(use => use.sub === user.attributes.sub)
    let userInfo = {sub: user.attributes.sub, userName: userList[ind].businessName, authType: userList[ind].authType }
    console.log("userInfo",userInfo)
    return userInfo
  }