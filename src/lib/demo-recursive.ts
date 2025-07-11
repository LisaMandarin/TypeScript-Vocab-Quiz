import { VocabList, water_list, land_list, air_list, neighborhood_list, city_list, country_list } from "./demo-class";

console.log("Starting the TypeScript Recursive Classes Example")

// a category that can hold words and subcategories
export class VocabCategory {
    name: string;
    list: VocabList;
    subcategories: VocabCategory[];

    constructor(n: string, l: VocabList, s: VocabCategory[]=[]) {
        this.name = n;
        this.list = l;
        this.subcategories = s
    }

    print(indent: string=""): void {
        console.log(`${indent}Category: ${this.name}`);
        this.list.words.forEach((w) => {
            console.log(`${indent}${w.format()}`);
        });
        this.subcategories.forEach((c) => {
            c.print(indent + "   ")
        })
    }
}

// an example vocab tree called Quiz1 with two subcategories called transportation and places.  Each subcategory contains several subcategories.
const water = new VocabCategory("water", water_list);
const land = new VocabCategory("land", land_list);
const air = new VocabCategory("air", air_list);

const transportation_list = { words: [], printAll: () => {} };
const transportation = new VocabCategory("transportation", transportation_list, [water, land, air])

const neighborhood = new VocabCategory("neighborhood", neighborhood_list);
const city = new VocabCategory("city", city_list);
const country = new VocabCategory("countryside", country_list);

const place_list = { words: [], printAll: () => {} };
const place = new VocabCategory("places", place_list, [neighborhood, city, country]);

const quiz1_list = { words: [], printAll: () => {} };
export const quiz1 = new VocabCategory("Quiz1", quiz1_list, [transportation, place])

// show the Quiz1 vocab tree
quiz1.print();
