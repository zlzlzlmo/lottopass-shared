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

export interface LottoDraw {
  id: number;
  date: string;
  winningNumbers: number[];
  bonusNumber: number;
  prizeStatistics: PrizeStatistics;
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
