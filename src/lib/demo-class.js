"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.country_list = exports.city_list = exports.neighborhood_list = exports.air_list = exports.land_list = exports.water_list = exports.VocabList = exports.Wordset = void 0;
console.log("Starting the TypeScript Classes Example");
// Store a set of word-definition and a method to format the word-definition
var Wordset = /** @class */ (function () {
    function Wordset(w, d) {
        this.word = w;
        this.definition = d;
    }
    Wordset.prototype.format = function () {
        return "- ".concat(this.word, ": ").concat(this.definition);
    };
    return Wordset;
}());
exports.Wordset = Wordset;
// Store a list of word-definition sets and a method to print all the wordsets
var VocabList = /** @class */ (function () {
    function VocabList(ws) {
        this.words = ws;
    }
    VocabList.prototype.printAll = function () {
        this.words.forEach(function (ws) { return console.log(ws.format()); });
    };
    return VocabList;
}());
exports.VocabList = VocabList;
// declare the wordsets
var water_wordset1 = new Wordset("ferry", "a boat for carrying people or goods");
var water_wordset2 = new Wordset("cruise ship", "a large ship for vacation trips");
var water_wordset3 = new Wordset("submarine", "a ship that goes underwater");
var land_wordset1 = new Wordset("bicycle", "a vehicle with two wheels powered by pedaling");
var land_wordset2 = new Wordset("car", "a road vehicle with four wheels");
var land_wordset3 = new Wordset("truck", "a large motor vehicle for transporting goods");
var air_wordset1 = new Wordset("hot air balloon", "A large balloon that carries people through the air");
var air_wordset2 = new Wordset("airplane", "A powered flying vehicle with wings");
var air_wordset3 = new Wordset("helicopter", "A flying vehicle that uses rotating blades");
var neighborhood_wordset1 = new Wordset("park", "An open green area for recreation");
var neighborhood_wordset2 = new Wordset("restaurnat", "A place where you can buy and eat a meal");
var neighborhood_wordset3 = new Wordset("swimming pool", "A large structure filled with water for swimming");
var city_wordset1 = new Wordset("museum", "A building where historical items are displayed");
var city_wordset2 = new Wordset("amusement park", "A large outdoor area with rides and shows");
var city_wordset3 = new Wordset("college", "A place for higher education");
var country_wordset1 = new Wordset("mountain", "A large natural elevation of the earth's surface");
var country_wordset2 = new Wordset("lake", "A large area of water surrounded by land");
// declare the lists of wordsets
exports.water_list = new VocabList([water_wordset1, water_wordset2, water_wordset3]);
exports.land_list = new VocabList([land_wordset1, land_wordset2, land_wordset3]);
exports.air_list = new VocabList([air_wordset1, air_wordset2, air_wordset3]);
exports.neighborhood_list = new VocabList([neighborhood_wordset1, neighborhood_wordset2, neighborhood_wordset3]);
exports.city_list = new VocabList([city_wordset1, city_wordset2, city_wordset3]);
exports.country_list = new VocabList([country_wordset1, country_wordset2]);
// print the list of wordsets
exports.water_list.printAll();
exports.land_list.printAll();
exports.air_list.printAll();
exports.neighborhood_list.printAll();
exports.city_list.printAll();
exports.country_list.printAll();
