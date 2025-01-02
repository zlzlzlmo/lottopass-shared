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
export interface SuccessResponse<T> {
    status: "success";
    data: T;
}
export interface ErrorResponse {
    status: "error";
    message: string;
}
export type FindAllResponse<T> = SuccessResponse<T> | ErrorResponse;
