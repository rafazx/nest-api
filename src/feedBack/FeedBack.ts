import { User } from "../user/User";

export class FeedBack {
    fb_id: number;
    userReceived_id: number;
    userSender_id: number;
    userReceived: User;
    userSender: User;
    data: Date;
    pointsToImprove: string;
    pointsToKeep: string;
    suggestions: string;
    finalFeedBack: string;
}