import { utils, writeFile } from "xlsx";
import { message } from "@/lib/antd";
import { VocabFormType } from "@/data/types";

export function saveFile ({formData}: {
    formData: VocabFormType[];
}) {
    if (formData.length <= 0) {
      message.info("No data to be saved")
      return;
    }
    if (hasEmptyField({formData})) {
      message.error("You can't leave the field(s) empty");
      return;
    }

    const sheet = utils.json_to_sheet(formData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, sheet, "Data");
    writeFile(workbook, "vocab-quiz.xlsx");
  }

export function hasEmptyField ({formData}: {formData: VocabFormType[]}): boolean {
    return formData.some(
      (data) => data.word.trim() === "" || data.definition.trim() === ""
    );
}