import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors
} from "./common";

export default [handleBodyRequestParsing, handleCors, handleCompression];
