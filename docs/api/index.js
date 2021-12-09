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
const getpeerinfo = require("./getpeerinfo");
const getrawmempool = require("./getrawmempool");
const getblock = require("./getblock"); 
const getblockhash = require("./getblockhash");
const getrawtransaction = require("./getrawtransaction");
const decoderawtransaction = require("./decoderawtransaction");

module.exports = {
  paths: {
    '/api/getblockcount': { ...getblockcount },
    '/api/getbestblockhash': { ...getbestblockhash },
    '/api/getconnectioncount': { ...getconnectioncount },
    '/api/getdifficulty': { ...getdifficulty },
    '/api/getblockchaininfo': { ...getblockchaininfo },
    '/api/getmininginfo': { ...getmininginfo },
    '/api/getpeerinfo': { ...getpeerinfo },
    '/api/getrawmempool': { ...getrawmempool },
    '/api/getblock/:hash': { ...getblock },
    '/api/getblockhash/:index': { ...getblockhash },
    '/api/getrawtransaction/:id': { ...getrawtransaction },
    '/api/decoderawtransaction/:hex': { ...decoderawtransaction },
  },
};
