export class CreateFeedBackDto {
    userReceived_id: number;
    userSender_id: number;
    date: Date;
    pointsToImprove: string;
    pointsToKeep: string;
    suggestions: string;
    finalFeedBack: string;
}