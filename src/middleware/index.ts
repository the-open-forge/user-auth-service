import {
    handleBodyRequestParsing,
    handleCors,
    // handleCompression
} from './common-setup/common-setup'

import query from './database/query';

const middlewareArray = [handleBodyRequestParsing, handleCors];

export {
    middlewareArray,
    query
};