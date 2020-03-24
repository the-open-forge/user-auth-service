import {
    handleBodyRequestParsing,
    handleCors,
    handleCompression
} from './common-setup/common-setup'

export default [handleBodyRequestParsing, handleCors, handleCompression];