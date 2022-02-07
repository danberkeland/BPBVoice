import { MockDatabase } from './MockDatabase';

const { DateTime } = require("luxon");

let today = DateTime.now().setZone("America/Los_Angeles").toString().split("T")[0]

export const mockedOpeningState = {
    isLoading: false,
    isModified: false,
    userInfo: null,
    customerList: [],
    chosen: "Novo",
    delivDate: today,
    database: MockDatabase,
    order: MockDatabase[4],
    route: "deliv",
    ponote: "",
    currentOrder: MockDatabase[4]
}