console.log("Starting the TypeScript Classes Example")

// Store a set of word-definition and a method to format the word-definition
export class Wordset {
    word: string;
    definition: string;

    constructor(w: string, d: string) {
        this.word = w;
        this.definition = d;
    }

    format() {
        return `- ${this.word}: ${this.definition}`
    }
}

// Store a list of word-definition sets and a method to print all the wordsets
export class VocabList {
    words: Wordset[];

    constructor(ws: Wordset[]) {
        this.words = ws;
    }

    printAll() {
        this.words.forEach((ws) => console.log(ws.format()))
    }
}

// declare the wordsets
const water_wordset1 = new Wordset("ferry", "a boat for carrying people or goods");
const water_wordset2 = new Wordset("cruise ship", "a large ship for vacation trips");
const water_wordset3 = new Wordset("submarine", "a ship that goes underwater");
const land_wordset1 = new Wordset("bicycle", "a vehicle with two wheels powered by pedaling");
const land_wordset2 = new Wordset("car", "a road vehicle with four wheels");
const land_wordset3 = new Wordset("truck", "a large motor vehicle for transporting goods");
const air_wordset1 = new Wordset("hot air balloon", "A large balloon that carries people through the air");
const air_wordset2 = new Wordset("airplane", "A powered flying vehicle with wings");
const air_wordset3 = new Wordset("helicopter", "A flying vehicle that uses rotating blades");
const neighborhood_wordset1 = new Wordset("park", "An open green area for recreation");
const neighborhood_wordset2 = new Wordset("restaurnat", "A place where you can buy and eat a meal");
const neighborhood_wordset3 = new Wordset("swimming pool", "A large structure filled with water for swimming");
const city_wordset1 = new Wordset("museum", "A building where historical items are displayed");
const city_wordset2 = new Wordset("amusement park", "A large outdoor area with rides and shows");
const city_wordset3 = new Wordset("college", "A place for higher education");
const country_wordset1 = new Wordset("mountain", "A large natural elevation of the earth's surface");
const country_wordset2 = new Wordset("lake", "A large area of water surrounded by land");

// declare the lists of wordsets
export const water_list = new VocabList([water_wordset1, water_wordset2, water_wordset3]);
export const land_list = new VocabList([land_wordset1, land_wordset2, land_wordset3]);
export const air_list = new VocabList([air_wordset1, air_wordset2, air_wordset3]);
export const neighborhood_list = new VocabList([neighborhood_wordset1, neighborhood_wordset2, neighborhood_wordset3]);
export const city_list = new VocabList([city_wordset1, city_wordset2, city_wordset3]);
export const country_list = new VocabList([country_wordset1, country_wordset2]);

// print the list of wordsets
// water_list.printAll();
// land_list.printAll();
// air_list.printAll();
// neighborhood_list.printAll();
// city_list.printAll();
// country_list.printAll();