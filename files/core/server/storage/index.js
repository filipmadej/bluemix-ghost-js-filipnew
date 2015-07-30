var errors = require('../errors'),
    storage;

function getStorage() {
    // TODO: this is where the check for storage apps should go
    // Local file system is the default
    var storageChoice = 'cloudant';

    if (storage) {
        return storage;
    }

    try {
        // TODO: determine if storage has all the necessary methods
        storage = require('./' + storageChoice);
    } catch (e) {
        errors.logError(e);
    }
    return storage;
}

module.exports.getStorage = getStorage;