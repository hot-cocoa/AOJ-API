// 各問題ステータスの総数
export class Status {
    submissions     : number;   // 提出数
    solved          : number;   // 正解数
    accepted        : number;   // AC数
    wrongAnswer     : number;   // WA数
    timeLimit       : number;   // TLE数
    memoryLimit     : number;   // MLE数
    outputLimit     : number;   // OLE数
    compileError    : number;   // CE数
    runtimeError    : number;   // RE数

    constructor(
        submissions     : number,
        solved          : number,
        accepted        : number,
        wrongAnswer     : number,
        timeLimit       : number,
        memoryLimit     : number,
        outputLimit     : number,
        compileError    : number,
        runtimeError    : number
    ) {
        this.submissions    = submissions;
        this.solved         = solved;
        this.accepted       = accepted;
        this.wrongAnswer    = wrongAnswer;
        this.timeLimit      = timeLimit;
        this.memoryLimit    = memoryLimit;
        this.outputLimit    = outputLimit;
        this.compileError   = compileError;
        this.runtimeError   = runtimeError;
    }


}
