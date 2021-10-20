const process = require('process');
const utils = require('utils')
var x = {};
var attribute_name = process.argv[2]
var another_attribute = process.argv[3]
x[attribute_name] = utils.escapeHtml('http://www.github.com/?foo=шеллы');
if (attribute_name != another_attribute)
{
    decodeURI(x.another_attribute);
}
