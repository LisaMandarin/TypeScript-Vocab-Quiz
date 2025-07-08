export type VocabFormType = {
    word: string;
    definition: string;
}

export type HandleFormChangeType = (field: string, value: string, index: number) => void

export type HandleFormDeleteType = (index: number) => void

export type FetchWordListType = () => Promise<void>
