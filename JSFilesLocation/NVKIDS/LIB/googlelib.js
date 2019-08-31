"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googlePO_1 = require("../PO/googlePO");
class googlelib {
    entertextinsearchbar() {
        googlePO_1.googlepo.searchbar.sendKeys('duraipandiraja');
    }
    entertextusingmethod(searchterm) {
        googlePO_1.googlepo.searchbymethod().sendKeys(searchterm);
    }
}
exports.googlelib = googlelib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlbGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vTlZLSURTL0xJQi9nb29nbGVsaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBMEM7QUFFMUMsTUFBYSxTQUFTO0lBRVgsb0JBQW9CO1FBRXZCLG1CQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFHTSxvQkFBb0IsQ0FBQyxVQUFpQjtRQUN6QyxtQkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0NBRUo7QUFiRCw4QkFhQyJ9