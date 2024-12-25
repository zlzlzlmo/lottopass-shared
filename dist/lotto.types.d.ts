interface PrizeTier {
    rank: number;
    winners: number;
    prize: number;
}
interface PrizeStatistics {
    totalPrize: number;
    winners: number;
    tiers: PrizeTier[];
}
interface LottoDraw {
    id: number;
    date: string;
    winningNumbers: number[];
    bonusNumber: number;
    prizeStatistics: PrizeStatistics;
}
export interface FindAllResponse {
    status: "success" | "error";
    data: LottoDraw[];
    message?: string;
}
export {};
