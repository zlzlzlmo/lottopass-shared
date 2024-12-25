export interface LottoDraw {
    drawNumber: number;
    date: string;
    winningNumbers: number[];
    bonusNumber: number;
    prizeStatistics: {
        totalPrize: number;
        firstWinAmount: number;
        firstAccumAmount: number;
        firstPrizeWinnerCount: number;
    };
}
export interface SuccessResponse {
    status: "success";
    data: LottoDraw[];
}
export interface ErrorResponse {
    status: "error";
    message: string;
}
export type FindAllResponse = SuccessResponse | ErrorResponse;
