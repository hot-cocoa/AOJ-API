import x = require('./Status');

// AOJのユーザクラス
export class User {
    id              : string;     // ユーザID
    name            : string;     // ユーザ名
    affiliation     : string;     // 所属
    registerDate    : number;     // 登録日時
    lastSubmitDate  : number;     // 最終提出日時
    policy          : string;     // コード閲覧ポリシー (public/private)
    country         : string;     // 国
    birthYear       : number;     // 誕生日
    displayLang     : string;     // 表示言語
    defaultProgLang : string;     // デフォルト言語
    status          : x.Status;   // 各ステータスの総数

    constructor(
        id              : string,
        name            : string,
        affiliation     : string,
        registerDate    : number,
        lastSubmitDate  : number,
        policy          : string,
        country         : string,
        birthYear       : number,
        displayLang     : string,
        defaultProgLang : string,
        status          : x.Status
    ) {
        this.id              = id;
        this.name            = name;
        this.affiliation     = affiliation;
        this.registerDate    = registerDate;
        this.lastSubmitDate  = lastSubmitDate;
        this.policy          = policy;
        this.country         = country;
        this.birthYear       = birthYear;
        this.displayLang     = displayLang;
        this.defaultProgLang = defaultProgLang;
        this.status          = status;
    }
}
