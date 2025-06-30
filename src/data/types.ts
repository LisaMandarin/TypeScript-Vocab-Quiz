export type VocabFormType = {
    word: string;
    definition: string;
}

export type handleFormChangeType = (field: string, value: string, index: number) => void

export type handleFormDeleteType = (index: number) => void

