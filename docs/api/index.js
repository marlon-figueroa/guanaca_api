/**
 * @author Marlon E. Figueroa
 * @since 22/11/2021
 *
 */

const getblockcount = require("./getblockcount");
const getbestblockhash = require("./getbestblockhash");
const getconnectioncount = require("./getconnectioncount");

module.exports = {
  paths: {
    '/api/getblockcount': { ...getblockcount },
    '/api/getbestblockhash': { ...getbestblockhash },
    '/api/getconnectioncount': { ...getconnectioncount },
  },
};
