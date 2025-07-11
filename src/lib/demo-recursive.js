"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quiz1 = exports.VocabCategory = void 0;
var demo_class_1 = require("./demo-class");
console.log("Starting the TypeScript Recursive Classes Example");
// a category that can hold words and subcategories
var VocabCategory = /** @class */ (function () {
    function VocabCategory(n, l, s) {
        if (s === void 0) { s = []; }
        this.name = n;
        this.list = l;
        this.subcategories = s;
    }
    VocabCategory.prototype.print = function (indent) {
        if (indent === void 0) { indent = ""; }
        console.log("".concat(indent, "Category: ").concat(this.name));
        this.list.words.forEach(function (w) {
            console.log("".concat(indent).concat(w.format()));
        });
        this.subcategories.forEach(function (c) {
            c.print(indent + "   ");
        });
    };
    return VocabCategory;
}());
exports.VocabCategory = VocabCategory;
// an example vocab tree called Quiz1 with two subcategories called transportation and places.  Each subcategory contains several subcategories.
var water = new VocabCategory("water", demo_class_1.water_list);
var land = new VocabCategory("land", demo_class_1.land_list);
var air = new VocabCategory("air", demo_class_1.air_list);
var transportation_list = { words: [], printAll: function () { } };
var transportation = new VocabCategory("transportation", transportation_list, [water, land, air]);
var neighborhood = new VocabCategory("neighborhood", demo_class_1.neighborhood_list);
var city = new VocabCategory("city", demo_class_1.city_list);
var country = new VocabCategory("countryside", demo_class_1.country_list);
var place_list = { words: [], printAll: function () { } };
var place = new VocabCategory("places", place_list, [neighborhood, city, country]);
var quiz1_list = { words: [], printAll: function () { } };
exports.quiz1 = new VocabCategory("Quiz1", quiz1_list, [transportation, place]);
// show the Quiz1 vocab tree
exports.quiz1.print();
