// API定数クラス
export namespace APIConst {
    // AOJAPIのURL
    export const API_ROOT_URL: string = 'https://judgeapi.u-aizu.ac.jp';

    // ユーザ検索APIのURL
    export const USER_URL: string = API_ROOT_URL + '/users/';

    // 全問題取得APIのURL
    export const ALL_PROBLEM_URL: string = API_ROOT_URL + '/problems';

    // ユーザに対する全問題取得APIのURL
    export const ALL_PROBLEM_BY_ID_URL: string = ALL_PROBLEM_URL + '/users/';
}
