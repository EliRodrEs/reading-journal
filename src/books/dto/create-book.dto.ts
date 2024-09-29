export class CreateBookDto {
    title: string;
    author: string;
    genres: Genres[];
    hasRepresentation: boolean;
    tier: Tiers
}

export enum Genres {
    FICTION = 'Fiction',
    NON_FICTION = 'Non-fiction',
    MYSTERY = 'Mystery',
    FANTASY = 'Fantasy',
    SCIENCE_FICTION = 'Science Fiction',
    ROMANCE = 'Romance',
    HORROR = 'Horror',
    BIOGRAPHY = 'Biography',
    HISTORY = 'History',
    POETRY = 'Poetry',
    THRILLER = 'Thriller',
    SELF_HELP = 'Self Help',
    ADVENTURE = 'Adventure'
}

export enum Tiers {
    GOD_TIER = 'God tier',
    GREAT = 'Great',
    COOL = 'Cool',
    OKAYISH = 'Okayish',
    MEEEH = 'Meeeeh',
    BAD = 'Bad',
    DO_NOT_OPEN = 'Recycle bin material'
}