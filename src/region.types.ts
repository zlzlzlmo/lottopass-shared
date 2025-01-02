export interface UniqueRegion {
  id: number;
  province: string;
  city: string;
}

export interface WinningRegion {
  id: number;
  drawNumber: number;
  storeName: string;
  province: string;
  city: string;
  district: string;
  method?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
  uniqueIdentifier: string;
}
