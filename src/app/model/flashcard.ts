export interface Flashcard {
    id: string;
    confident: boolean;
    type: string;
    dateAdded: string;
    conversations?: Conversation;
    verbs?: Verb;
    vocabularies?: Vocabulary;
    seqNo: number;
}


interface Conversation {
    notes: string;
    sentence: string;
    translated: string;
}

interface Verb {
    notes: string;
    translated: string;
    verb: string;
    past: string[];
    present: string[];
    future: string[];
    pastSentence: string;
    presentSentence: string;
    futureSentence: string;
}

interface Vocabulary {
    notes: string;
    plural: string;
    sentence: string;
    synonyms: string[];
    translated: string;
    word: string;
}
