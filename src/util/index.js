const queryString = require('query-string');

class Utility{
    constructor(){

    }

    extractQS(loc){
        // Gets the props and extracts the query strings. Returns a object
        const search = loc.search;

        return queryString.parse(search);

    }


}

export default Utility;