import Connection = require('../connection/Http')

// ユーザ検索クラス
export class FindUser {

    // IDに対するユーザを取得
    findById(id: string) {
        const url: string = AOJ_USER_URL + id;

        // データを取得
        const userStr = new Connection.Http().sendGetRequest(url);

        // TODO: 結果パース + 格納
    }
}
