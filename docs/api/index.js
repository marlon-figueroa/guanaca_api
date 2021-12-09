/**
 * @author Marlon E. Figueroa
 * @since 22/11/2021
 *
 */

const getblockcount = require("./getblockcount");

module.exports = {
  paths: {
    '/getblockcount': { getblockcount },
  },
};
