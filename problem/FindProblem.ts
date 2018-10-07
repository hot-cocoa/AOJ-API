import { Http } from '../connection/Http';
import { APIConst } from '../settings/const';

// 問題検索クラス
export class FindProblem {
    // オプションを付加
    addOption(page, size) {
        let option: string = "";

        if (page != null) {
            option += "?page=" + page;
        }

        if (size != null) {
            if (page != null) {
                option += '&';
            }
            option += 'size=' + size;
        }

        return option;
    }

    // 全問題を取得
    findAllProblems(page = null, size = null) {
        const url: string = APIConst.ALL_PROBLEM_URL
                            + this.addOption(page, size);

        // データを取得
        new Http().sendGetRequest(url, this.afterConnection);
    }

    // ユーザIDに対する全問題を取得
    findAllProblemsByUserId(id: string, page = null, size = null) {
        console.log(id + " " + page + " " + size);

        const url: string = APIConst.ALL_PROBLEM_BY_ID_URL + id
                            + this.addOption(page, size);

        // データを取得
        new Http().sendGetRequest(url, this.afterConnection);
    }

    // HTTP通信後の処理
    afterConnection(response: string) {
        const obj = JSON.parse(response);

        // TODO: 通信後の処理
        return obj;
    }
}
