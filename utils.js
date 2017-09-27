/**
 * Common utility functions for cloud functions
 *
 * @author Neil
 */
'use strict';

/**
 * Background Cloud Function to be triggered by Pub/Sub.
 *
 * @param objectOfInterest JSON event.
 */
exports.debugJsonObject = function (objectOfInterest) {

    Object.keys(objectOfInterest).forEach((k) => {
        if (objectOfInterest[k] === undefined) {
            console.log('key: ' + k + ' was undefined');
        }
        else {
            console.log('key: ' + k + ' = ' + objectOfInterest[k]);
        }
    });

    Object.keys(data).forEach((k) => {
        if (data[k] === undefined) {
            console.log('data key: ' + k + ' was undefined');
        }
        else {
            console.log('data key: ' + k + ' = ' + data[k]);
        }
    });

    Object.keys(data.attributes).forEach((k) => {
        if (data.attributes[k] === undefined) {
            console.log('data.attributes key: ' + k + ' was undefined');
        }
        else {
            console.log('data.attributes key: ' + k + ' = ' + data.attributes[k]);
        }
    });
};

/**
 * Parse/normalize id (usually customer in our case)
 *
 * @param uuid
 */
exports.parseId = function(uuid) {
    return uuid.replace(/[-'"+]/g, '');
};

/**
 * Used by JSON.parse in certain functions to fix date/timestamp format issues
 *
 * @param key
 * @param value
 * @returns {*}
 */
exports.reviver = function(key, value) {

    // Filtering out properties
    if (typeof value === Date) {
        return new Date(value);
    }
    else if (key === 'TIMESTAMP') {
        return new Date(value);
    }
    return value;
};

