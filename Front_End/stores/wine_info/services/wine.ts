import { config } from '../config/config'

export const wineService = {
  wineInfo
}


export async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// example consuming code
interface Wine {
  wid: number;
  nameKor : string;
  nameEng: string;
  type: string;
  sparkling: false,
  grape: string;
  country: string;
  countrySub: string;
  winery: string;
  alcohol: 14,
  whenUse: string;
  grade: null,
  sweet: 1,
  body: 3,
  acid: 3,
  tannin: 1,
  foodMatch: string;
  info: string;
  likes: [string],
  likeNum: 0
}

async function wineInfo() {
  const response = await http<Wine[]>(
    "http://70.12.246.40:9090/WineProject/wine/readAll/3"
  );

  console.log("와인 정보 확인")
  console.log(response);

  return response;
 
}