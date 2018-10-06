import Connection = require('../connection/Http');
import { APIConst } from '../settings/const';

// ユーザ検索クラス
export class FindUser {
    // IDに対するユーザを取得
    findById(id: string) {
        const url: string = APIConst.AOJ_USER_URL + id;

        // データを取得
        new Connection.Http().sendGetRequest(url, this.afterConnection);
    }

    // HTTP通信後の処理
    afterConnection(response: string) {
        const obj = JSON.parse(response);
        // TODO: 処理追加
        return obj;
    }
}
