const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res) {
    res.send('CLASSIFICATION: BookInstance list');
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('CLASSIFICATION: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res) {
    res.send('CLASSIFICATION: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function(req, res) {
    res.send('CLASSIFICATION: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('CLASSIFICATION: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('CLASSIFICATION: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('CLASSIFICATION: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('CLASSIFICATION: BookInstance update POST');
};