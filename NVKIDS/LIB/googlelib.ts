import { googlepo } from "../PO/googlePO";

export class googlelib{

    public entertextinsearchbar()
    {
        googlepo.searchbar.sendKeys('duraipandiraja')
    }


    public entertextusingmethod(searchterm:string){
        googlepo.searchbymethod().sendKeys(searchterm)

    }

}