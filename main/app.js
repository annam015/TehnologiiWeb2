function addTokens(input, tokens){
    if(typeof input != 'string') {
        throw new Error('Invalid input');
    }

    if(input.length < 6) {
        throw new Error('Input should have at least 6 characters');
    }

    for(const obj of tokens) {
        if(!obj.hasOwnProperty('tokenName') || typeof obj.tokenName != 'string') {
            throw new Error('Invalid array format');
        }
    }

    if(input.includes('...')) {
        for(const obj of tokens) {
            input = input.replace('...', `\${${obj.tokenName}}`);
        }
        return input;

    } else {
        return input;
    }
}

const app = {
    addTokens: addTokens
}

module.exports = app;
