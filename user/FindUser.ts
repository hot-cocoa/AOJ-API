import { Http } from '../connection/Http';
import { User } from '../model/User';
import { APIConst } from '../settings/const';

// ユーザ検索クラス
export class FindUser {
    // IDに対するユーザを取得
    findById(id: string) {
        const url: string = APIConst.USER_URL + id;

        // データを取得
        new Http().sendGetRequest(url, this.afterConnection);
    }

    // HTTP通信後の処理
    afterConnection(response: string) {
        const user: User = JSON.parse(response) as User;
        // TODO: 通信後の処理
        return user;
    }
}
