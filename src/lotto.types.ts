// 로또 한 회차의 정보를 나타내는 인터페이스
export interface LottoDraw {
  drawNumber: number; // 회차 번호 (예: 1020, 1021 등)
  date: string; // 추첨 날짜 (YYYY-MM-DD 형식, 예: "2022-06-18")
  winningNumbers: number[]; // 당첨 번호 배열 (6개의 숫자, 예: [12, 27, 29, 38, 41, 45])
  bonusNumber: number; // 보너스 번호 (6개의 당첨 번호 외 추가 번호)
  prizeStatistics: {
    // 당첨 통계 정보
    totalPrize: number; // 전체 판매 금액 (예: 104996396000, 단위: 원)
    firstWinAmount: number; // 1등 당첨 금액 (단위: 원, 예: 1966431520)
    firstAccumAmount: number; // 1등 당첨 누적 금액 (단위: 원, 예: 25563609760)
    firstPrizeWinnerCount: number; // 1등 당첨자 수 (예: 13)
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
