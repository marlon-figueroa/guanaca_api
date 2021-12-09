/**
 * @author Marlon E. Figueroa
 * @since 22/11/2021
 *
 */

const getblockcount = require("./getblockcount");
const getbestblockhash = require("./getbestblockhash");
const getconnectioncount = require("./getconnectioncount");
const getdifficulty = require("./getdifficulty");
const getblockchaininfo = require("./getblockchaininfo");
const getmininginfo = require("./getmininginfo");

module.exports = {
  paths: {
    '/api/getblockcount': { ...getblockcount },
    '/api/getbestblockhash': { ...getbestblockhash },
    '/api/getconnectioncount': { ...getconnectioncount },
    '/api/getdifficulty': { ...getdifficulty },
    '/api/getblockchaininfo': { ...getblockchaininfo },
    '/api/getmininginfo': { ...getmininginfo },

    
  },
};
