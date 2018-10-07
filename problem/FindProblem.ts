import { Http } from '../connection/Http';
import { APIConst } from '../settings/const';

// pageオプションのデフォルト値
const PAGE_DEFAULT_VALUE = -1;

// sizeオプションのデフォルト値
const SIZE_DEFAULT_VALUE = -1;

// 問題検索クラス
export class FindProblem {
    // オプションを付加
    addOption(page: number, size: number) {
        let option: string = "";

        if (page !== PAGE_DEFAULT_VALUE) {
            option += "?page=" + page;
        }

        if (size !== SIZE_DEFAULT_VALUE) {
            if (page != PAGE_DEFAULT_VALUE) {
                option += '&';
            }
            option += 'size=' + size;
        }

        return option;
    }

    // 全問題を取得
    findAllProblems(page: number = PAGE_DEFAULT_VALUE,
                    size: number = SIZE_DEFAULT_VALUE) {

        const url: string = APIConst.ALL_PROBLEM_URL
                            + this.addOption(page, size);

        // データを取得
        new Http().sendGetRequest(url, this.afterConnection);
    }

    // ユーザIDに対する全問題を取得
    findAllProblemsByUserId(id: string,
                            page: number = PAGE_DEFAULT_VALUE,
                            size: number = SIZE_DEFAULT_VALUE) {
                                
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
