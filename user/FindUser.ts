import { Http } from '../connection/Http';
import { APIConst } from '../settings/const';

// ユーザ検索クラス
export class FindUser {
    // IDに対するユーザを取得
    findById(
        id: string,
        afterConnection: (response: string) => void
    ) {
        const url: string = APIConst.USER_URL + id;

        // データを取得
        new Http().sendGetRequest(url, afterConnection);
    }
}
