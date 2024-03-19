import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiService {

  getHello(): string {
    return 'Hello World!';
  }

  async getBookInfo(bookid: string): Promise<string> {

    try {
      const dataurl = 'http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=' + process.env.TTBKEY + `&itemIdType=ISBN13&ItemId=${bookid}&output=js&Version=20131101&OptResult=ebookList,usedList,reviewList&partner=starcube`;

      console.log(dataurl);
      const response = await axios.get(dataurl);
      if (response.data.errorCode) {
        console.error(response.data.errorMessage);
        return response.data.errorMessage;
      } else {
        const items = response.data.item;
        var final_result = '';
        for (const item of items) {
          final_result = item.title + '<br>' + item.link;
        }
      }
    } catch (error) {
      console.error('Error fetching and saving items:', error);
    } 
    const ret_msg = 'This is MY book<br>TITLE:' + final_result;
    return ret_msg;
  }
}
