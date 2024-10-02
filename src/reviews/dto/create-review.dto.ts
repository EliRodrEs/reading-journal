export class CreateReviewDto {
    comment: string;
    rating: RatingEnum;
}

enum RatingEnum {
'bad' = '1/5',
'meh' = '2/5',
'okay' = '3/5',
'good' = '4/5',
'best' = '5/5'
}