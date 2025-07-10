import { utils, writeFile } from "xlsx";
import { VocabFormType } from "@/data/types";

// save the word-definition list in excel file
export function saveFile({ wordList }: { wordList: VocabFormType[] }) {
  const sheet = utils.json_to_sheet(wordList);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, sheet, "Data");
  writeFile(workbook, "vocab-quiz.xlsx");
}
