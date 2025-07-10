import { VocabCategory } from "./demo-recursive";
import { quiz1 } from "./demo-recursive";

// wait for one second and then print the category and its subcategories and the items in them
async function saveVocabTree(category: VocabCategory): Promise<void> {
    console.log("Saving vocab tree...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!category.name) {
                reject(new Error("Category must have a name!"))
            } else {
                console.log(`Saved category: ${category.name}`)
                category.print();
                resolve();
            }
        }, 1000);
    })
}

// execute the async function of saveVocabTree and show the status of the execution
async function run() {
    try {
        await saveVocabTree(quiz1);
        console.log("Vocab tree saved successfully")
    } catch (error) {
        console.error("Failed to save vocab tree", (error as Error).message)
    }
}

run();