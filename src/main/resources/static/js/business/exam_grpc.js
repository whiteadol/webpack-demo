"use strict";
const protobuf = require("protobufjs");
import { ProtoManage } from "../util/protoUtil.js";
import { Axios } from "../util/axiosUtil.js";
import { ExamAnswerParams, ExamAnswer } from "../util/grpc/exam_answer_pb.js";

const moment = require("moment");
import Notiflix from "notiflix";

Notiflix.Loading.init({
    messageFontSize: "3vh",
    svgSize: "90",
    svgColor: "#0db5e7",
    messageColor: "#0db5e7",
    messageMaxLength: 60,
});

let pythonPrintData = [];

new mdb.Popover(document.querySelector("#infoPopup"), {
    html: true,
    content: `
<pre class="top_over w-100 prob-pre">
* Python Version - 3.10.2
   - available Library
    Ⅰ. numpy - 1.23.5
    Ⅱ. scipy - 1.9.3
    Ⅲ. pandas - 1.5.2
    Ⅳ. scikit-learn - 1.2.0</pre>`,
});

const test_exam_type = [
    {
        examNm: "Python_20230109",
        actionDate: moment().format("YYYY-MM-DD"),
    },
];

const exam_question_list = [
    {
        examNm: "Python_20230109",
        probNum: 1,
        questType: 1,
        problem: "다음 설명 중 틀린 것은 무엇인가?",
        problemSample: null,
        sample: ["문자열은 문자, 단어 등으로 구성된 문자들의 집합니다.", "튜플은 []로 둘러싸여 있다.", "집합 자료형은 set 키워드를 사용해서 만든다.", "set에서 교집합은 & 이다"],
    },
    {
        examNm: "Python_20230109",
        probNum: 2,
        questType: 1,
        problem: "다음 중 파이썬 문법에 대한 설명으로 틀린 것은? ",
        problemSample: null,
        sample: [
            "딕서너리는 key와 value와 하나의 쌍이 {}로 둘러싸여 있다.",
            "나눗셈을 하고 몫을 반환하는 연산자는 // 이다.",
            "b = a[:]는 a를 b에 복사하는 것을 의미한다.",
            "b = copy(a)는 a를 b에 복사하는 것을 의미한다.",
        ],
    },
    {
        examNm: "Python_20230109",
        probNum: 3,
        questType: 1,
        problem: "다음 중 파이썬 실행의 결과 값으로 틀린 것은?",
        problemSample: null,
        sample: ["round(1.4)는 1이다.", "abs(-20)은 20이다.", "all([1,2,3])은 True 이다.", "any([1,2,3,0])은 False이다."],
    },
    {
        examNm: "Python_20230109",
        probNum: 4,
        questType: 1,
        problem: " 다음 중 파이썬 실행의 결과 값으로 틀린 것은?",
        problemSample: null,
        sample: ["pow(2,4)는 16이다. ", "list(range(5,10))은 [5,6,7,8,9,10]이다.", "tuple(“abs”)는 (‘a’, ‘b’, ‘c’)이다. ", " type(“school”)은 <class ‘str’>이다."],
    },
    {
        examNm: "Python_20230109",
        probNum: 5,
        questType: 2,
        problem: "빈칸’에 들어갈 코드로 적당한 것은 무엇인가? ",
        problemSample: {
            condition: `i = 0
while(True) 
    i = i+1
    if i == 1000: 
         [     빈 칸     ]
        break
        print(i)`,
            result: `0
... 999
i가 1000이 되었습니다. 반복문을 중단합니다. `,
        },
        sample: [
            "print(‘i가 {0}이 됐습니다. 반복문을 중단합니다.’,format(i)) ",
            "print(‘i가 {0}이 됐습니다. 반복문을 중단합니다.’.format(i))",
            "print(‘i가 ’+format(i)+’이 됐습니다. 반복문을 중단합니다.’)",
            "print(‘i가 \\i이 됐습니다. 반복문을 중단합니다.’, format(i))",
        ],
    },
    {
        examNm: "Python_20230109",
        probNum: 6,
        questType: 2,
        problem: "빈칸’에 들어갈 코드로 적당한 것은 무엇인가? ",
        problemSample: {
            condition: `for i in range(1, 6): 
for j in range(i): 
    [     빈 칸     ]
print()`,
            result: `*
**
***
****
*****`,
        },
        sample: ["print(“*”, end = “”, )", "print(“*”)", "print(“*”, end ==“”,)", "print(“*”+“*”)"],
    },
    {
        examNm: "Python_20230109",
        probNum: 7,
        questType: 2,
        problem: "다음 설명 중 ‘빈칸’에 들어갈 알맞은 코드는? ",
        problemSample: {
            condition: `dic = {'애플':'www.apple.com', '파이썬':'www.python.org', '마이크로소프트':'www.microsoft.com'}
[     빈 칸     ]
print("{0} : {1}".format(k,v))`,
            result: null,
        },
        sample: ["while(k, v)", "for k, v in dic.items():", "for k, v in range(dic)", "for k, v"],
    },
    {
        examNm: "Python_20230109",
        probNum: 8,
        questType: 1,
        problem: "다음 설명 중 틀린 것을 고르세요?",
        problemSample: null,
        sample: ["시스템 환경을 알고 싶을때는 os.environment 이다.", "디렉토리 위치 변경은 os.chdir이다. ", "시스템 명령어 호출은 os.system이다. ", "shutil은 파일을 복사해주는 python 모듈이다"],
    },
    {
        examNm: "Python_20230109",
        probNum: 9,
        questType: 1,
        problem: "시간에 관련된 time 함수에 대하여 틀린것은?",
        problemSample: null,
        sample: [
            "time.time()은 UTC를 사용한다. ",
            "시간에 관련된 포맷 코드는 %y는 연도를 나타낸다. ",
            "time.localtime은 연도, 월, 일, 시, 분, 초의 형태로 바꾸어 준다. ",
            "time.asctime(time.localtime(time.time()))은 'Mon Dec 30 19:41:00 2019'의 형태이다.",
        ],
    },
    {
        examNm: "Python_20230109",
        probNum: 10,
        questType: 2,
        problem: "다음 중 ‘빈칸’에 들어갈 코드로 알맞은 것은? ",
        problemSample: {
            condition: `names = {'Marry':10999, 'Sams':2111, 'Aimy':9778, 'Tom':20245, 'Michale':27115, 'Bob':5887, 'Kelly':7855}
[     빈 칸     ]
print(items)
for item in items:
    print(item)`,
            result: `dict_items([('Marry', 10999), ('Sams', 2111), ('Aimy', 9778), ('Tom', 20245), ('Michale', 27115), 
('Bob', 5887), ('Kelly', 7855)])
('Marry', 10999)
('Sams', 2111)
('Aimy', 9778)
('Tom', 20245)
('Michale', 27115)
('Bob', 5887)
('Kelly', 7855)`,
        },
        sample: ["items = names.items(:)", "items = names.items(1:5)", "items = names.item()", "items = names.items()"],
    },
    {
        examNm: "Python_20230109",
        probNum: 11,
        questType: 3,
        questTypeLv: 2,
        permitLine: [],
        subNum: 1,
        problem: "다음 조건에 맞게 ‘빈 칸’에 들어갈 알맞은 내용을 적으시오.",
        problemSample: {
            condition: `
1부터 입력 값까지 합을 구하세요.

[결과 출력 화면]

55`,
            result: `
init = int(10)
class MathTest:
    @staticmethod
    def sum(a, b):
        return a + b

final = 0
for j in range(1, init + 1 ):
    final +=  MathTest.sum(init, 1) / 2
    
print(int(final))`,
        },
        sample: null,
    },
    {
        examNm: "Python_20230109",
        probNum: 12,
        questType: 3,
        questTypeLv: 1,
        permitLine: [],
        subNum: 2,
        problem: "올해 경과된 날짜 수 계산하기.",
        problemSample: {
            condition: `
1. 날짜는 현재해 1월 1일부터 카운트 합니다. 
2. 화면에 print를 이용하여 다음과 같이 출력합니다. 
    “오늘은 [2019-01-01]이후 [365]일째 되는 날입니다.”
3. time 모듈의 localtime()을 합니다`,
            result: `
from time import localtime
t = localtime()
start_day = '%d-01-01'%t.tm_year
elapsed_day = t.tm_yday
print('오늘은 [%s]이후 [%d]일째 되는 날입니다. '%(start_day, elapsed_day))`,
        },
        sample: null,
    },
    {
        examNm: "Python_20230109",
        probNum: 13,
        questType: 3,
        questTypeLv: 1,
        permitLine: [],
        subNum: 3,
        problem: "두개의 주어진 조건에서 최대값과 최소값을 구하여라.",
        problemSample: {
            condition: `
1. 9.96, 1.27, 5.07, 6.45, 8.38, 9.29, 4.93, 7.73, 3.71, 0.93 중에서 최대값과 최소값을 구하여라
2. Alotofthingsoccureachday 중에서 최대값과 최소값을 구하여라.`,
            result: `
listdata = [9.96, 1.27, 5.07, 6.45, 8.38, 9.29, 4.93, 7.73, 3.71, 0.93]
maxval = max(listdata)
minval = min(listdata)
print('최대값 : ', maxval)
print('최소값 : ', minval)
txt = 'Alotofthingsoccureachday'
maxval = max(txt)
minval = min(txt)
print('최대값 : ', maxval)
print('최소값 : ', minval)`,
        },
        sample: null,
    },
    {
        examNm: "Python_20230109",
        probNum: 14,
        questType: 3,
        questTypeLv: 1,
        permitLine: [],
        subNum: 4,
        problem: "문자 코드 구하기",
        problemSample: {
            condition: `
1. 문자를 커맨드 창에서 입력받는다. 
2. 입력은 “문자 1개를 입력하세요 : ”로 한다. 
3. 결과는 아래와 같이 화면에 프린트한다. 
문자 : c 코드값: 99[0x63]`,
            result: `
ch = '문자를 1개 입력하세요 : '
text = 'c'
if len(ch)!=0 :
    ch = ch[0]
    chv = ord(text)
    print('문자 : %s \t 코드값: %d[%s]'%(text, chv, hex(chv)))`,
        },
        sample: null,
    },
    /*     {
        examNm: "Python_20230109",
        probNum: 15,
        questType: 3,
        questTypeLv: 1,
        permitLine: [],
        subNum: 4,
        problem: "URL에서 쿼리 문자열 추출하기",
        problemSample: {
            condition: `
            1. 웹 사이트 주소는 “https://post.naver.com/viewer/postView.nhn?volumeNo=27174949&memberNo=37451778&navi
                gationType=push” 로 한다. 2. 결과는 다음과 같이 한다. volumeNo=27174949
                memberNo=37451778
                navigationType=push
            `,
            result: null,
        },
        sample: null,
    }, */
    {
        examNm: "Python_20230109",
        probNum: 15,
        questType: 3,
        questTypeLv: 2,
        permitLine: [1],
        subNum: 4,
        problem: "URL에서 쿼리 문자열 추출하기",
        problemSample: {
            condition: `
두 수의 합 구하는 함수를 완성하세요. 

[결과 출력 화면]
30`,
            result: `def hap(x, y):
    [빈칸]
re = hap(10, 20)
print(re)
            `,
        },
        sample: null,
    },
];

class Answer {
    constructor(probList) {
        this._answerStore = probList.map((one, idx) => {
            return {
                prob: idx + 1,
                answer: null,
            };
        });
    }

    get answerStore() {
        return this._answerStore;
    }

    set answerStore(obj) {
        const thisIdx = this._answerStore.findIndex(one => one["prob"] === obj["prob"]);
        this._answerStore[thisIdx]["answer"] = isNaN(parseInt(obj["answer"])) ? obj["answer"] : parseInt(obj["answer"]);
    }
}

class Question {
    constructor({ question, type, cm, db }) {
        this.cm = cm;
        this.db = db;
        this.$WRAP = $(document.getElementById("questionWrap"));
        this.type = type;
        this.question = question;
        this.prevSumNum = 1;
        this.mapper = {
            0: "①",
            1: "②",
            2: "③",
            3: "④",
        };
    }

    CreateQuestionWrap() {
        this.question.forEach((one, idx) => {
            const { examNm, problem, problemSample, questType, sample } = one;
            if (questType === 3) return;
            const questionNum = idx + 1;
            const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row m-3 mb-4">
                <h1 class="mb-2 ex-prb">【문제 ${questionNum}】${problem}</h1>
                <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-1">
                </div>
            </div>
            `);
            switch (questType) {
                case 1:
                    if (sample) {
                        sample.forEach((data, idx) => {
                            const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx + 1}>${this.mapper[idx]} ${data}</p>`);
                            p.addEventListener("click", async e => {
                                e.currentTarget.parentNode.childNodes.forEach(one => {
                                    if (one.nodeType === 1) one.classList.remove("ex-samp-selected");
                                });
                                setTimeout(() => e.target.classList.add("ex-samp-selected"), 50);
                                //이전번호 데이터 저장
                                await this.db.CONNECTION.insert({
                                    into: "questions",
                                    upsert: true,
                                    values: [
                                        {
                                            id: questionNum,
                                            answer: e.target.dataset.sampleNum,
                                        },
                                    ],
                                });
                            });
                            elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
                        });
                    }
                    break;
                case 2:
                    const { condition, result } = problemSample;
                    const card = `
                    <div class="row col-12">
                        <div class="card p-0">
                            <div class="card-header">
                                조건
                            </div>
                            <div class="card-body p-0">
                                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="white-space: pre;"></pre>
                            </div>
                        </div>
                        ${
                            result
                                ? ` <div class="card p-0">
                                        <div class="card-header">
                                            [결과 출력 화면]
                                        </div>
                                        <div class="card-body p-0">
                                            <pre class="card-text prob-pre lh-base m-0 p-3" id="result" style="white-space: break-spaces;"</pre>
                                        </div>
                                    </div>`
                                : ``
                        }
                       
                        <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-3">
                        </div>
                    </div>
                    `;
                    const type2 = this.StringToDom(card);
                    Array.from(type2.getElementsByTagName("pre")).forEach((one, idx) => {
                        one.innerHTML = idx === 0 ? condition : result;
                    });
                    elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(type2);
                    if (sample) {
                        sample.forEach((data, idx) => {
                            const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx + 1}>${this.mapper[idx]} ${data}</p>`);
                            p.addEventListener("click", async e => {
                                e.currentTarget.parentNode.childNodes.forEach(one => {
                                    if (one.nodeType === 1) one.classList.remove("ex-samp-selected");
                                });
                                setTimeout(() => e.target.classList.add("ex-samp-selected"), 50);
                                //이전번호 데이터 저장
                                await this.db.CONNECTION.insert({
                                    into: "questions",
                                    upsert: true,
                                    values: [
                                        {
                                            id: questionNum,
                                            answer: e.target.dataset.sampleNum,
                                        },
                                    ],
                                });
                            });
                            elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
                        });
                    }
                    break;
            }
            $(document.getElementById("allQuestionWrap")).append(elemnt);
        });
    }
    /**
     * 주관식 문제 생성
     * @param {Integer} probNum 문제번호
     * @returns Object
     */
    CreateSubjectiveQuestion(probNum) {
        probNum = probNum || 1;
        const subProb = this.question.find(oneProb => oneProb["questType"] === 3 && oneProb["probNum"] == probNum);
        const subProbIdx = this.question.findIndex(oneProb => oneProb["questType"] === 3 && oneProb["probNum"] == probNum);
        if (subProb) {
            const { examNm, problem, problemSample, questType, questTypeLv, permitLine, sample, subNum } = subProb;
            const questionNum = subProbIdx + 1;
            this.cm.permitLines = permitLine;
            const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row p-2">
                <div class="ex-prb">문제 ${questionNum}】${problem}</div>
                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="color: black;white-space : pre;background: aliceblue;">
                    ${problemSample.condition}
                </pre>
            </div> `);
            if (questTypeLv === 2) {
                this.cm.editor.setValue(problemSample.result);
            } else {
                this.cm.editor.setValue(problemSample.result);
            }
            $(document.getElementById("allQuestionWrap_s")).empty();
            $(document.getElementById("allQuestionWrap_s")).append(elemnt);
            return {
                subProbNum: questionNum, //전체 문제에서의 문제번호
                subNum: subNum, //주관식에서의 문제번호
            };
        }
    }

    StringToDom(string) {
        return new DOMParser().parseFromString(string, "text/html").body.firstChild;
    }
}

class PyThonMirror {
    #pyodide;
    constructor({ el, output, probText }) {
        this._permitLines = [3, 4, 5];
        this._probNum = 1;
        this.#pyodide = null;
        this.editor = CodeMirror.fromTextArea(el, {
            mode: {
                //name: "python-noprint",
                name: "python",
                version: 3,
                singleLineStringErrors: false,
            },
            lineNumbers: true,
            indentUnit: 4,
            styleActiveLine: true,
            lint: true,
            matchBrackets: true,
            gutters: ["CodeMirror-lint-markers"],
        });

        this.output = output;
        this.errorOutput = output;

        this.editor.on("keydown", function (cm, event) {
            //console.log(event);
            if (event.keyCode == 13) {
                return;
            }
        });
        this.editor.on("dragstart", () => event.preventDefault());
        this.editor.on("beforeChange", (cm, change) => this.BeforeChange(cm, change));

        this.editor.on("change", (cm, change) => {
            if (this.permitLines && this.permitLines.length === 0) {
                [...Array(cm.doc.size).keys()].forEach((one, idx) => {
                    this.editor.removeLineClass(one, "wrap", "line-top");
                    this.editor.removeLineClass(one, "wrap", "non-permit");
                });
            } else {
                [...Array(cm.doc.size).keys()].forEach((one, idx) => {
                    this.editor.removeLineClass(one, "wrap", "line-top");
                    this.editor.removeLineClass(one, "wrap", "non-permit");
                    if (this.permitLines.includes(one)) {
                        this.editor.addLineClass(one, "wrap", "line-top");
                    } else {
                        this.editor.addLineClass(one, "wrap", "non-permit");
                    }
                });
            }
        });
    }

    BeforeChange(cm, change) {
        const { from, to, origin } = change;
        //console.log(`이전 라인 :: ${from.line}`);
        //console.log(`이후 라인 :: ${to.line}, 명령 :: ${origin}`);
        if (origin === "setValue") return;
        if (this.permitLines && this.permitLines.length === 0) return;
        if (from.line !== to.line || !this.permitLines.includes(from.line) || change.text.length > 1) {
            change.cancel();
        }
    }

    set addToOutput(buildResult) {
        const { result, data } = buildResult;
        if (result) {
            this.errorOutput.value = null;
        } else {
            this.output.value = null;
        }
        setTimeout(() => {
            if (pythonPrintData.length > 0) {
                pythonPrintData.forEach(print => {
                    this[`${result ? "output" : "errorOutput"}`].value += ">>>" + print + "\n";
                });
            }
            if (data) {
                this[`${result ? "output" : "errorOutput"}`].value += ">>>" + data + "\n";
            }
        }, 100);
    }

    set probNum(num) {
        this._probNum = num;
    }
    get probNum() {
        return this._probNum;
    }

    get permitLines() {
        return (() => this._permitLines)();
    }
    set permitLines(datas) {
        return (this._permitLines = datas);
    }
}

class IndexDBed {
    constructor() {
        this.DB;
        this.CONNECTION = new JsStore.Connection(new Worker("/static/js/lib/jsstore.worker.min.js"));
    }

    async Init() {
        const defineDB = {
            name: "EXAM_DB",
            tables: [this.TableDefine({ tbName: "exam" }), this.TableDefine({ tbName: "questions" })],
        };
        this.DB = await this.CONNECTION.initDb(defineDB);
        if (this.DB) {
            console.log(`%c Db Created & connection is opened`, `color : blue`);
        } else {
            console.log(`%c Db Connection is opened`, `color : blue`);
        }
    }

    TableDefine({ tbName }) {
        const tableForm = {
            name: tbName,
            columns: {
                id: { primaryKey: true, autoIncrement: true },
            },
        };
        if (tbName === "exam") {
            tableForm["columns"]["examNm"] = { notNull: true, dataType: "string" };
            tableForm["columns"]["actionDate"] = { notNull: true, dataType: "string" };
        } else if (tbName == "questions") {
            tableForm["columns"]["answer"] = { notNull: false, dataType: "string" };
        }
        return tableForm;
    }

    async DataSelect(condition = null) {
        const query = {
            from: "questions",
        };
        if (condition) {
            //delete query["where"];
            query["where"] = { id: parseInt(condition) };
        }
        const result = await this.CONNECTION.select(query).catch(e => {
            console.error(e);
            return [];
        });
        return result;
    }
}

const axios = require("axios");

document.addEventListener("DOMContentLoaded", async () => {
    Notiflix.Loading.hourglass("Python 모듈을 불러오는 중입니다. 잠시만 기다려 주십시오.");
    const grpcAxios = new Axios({ type: "grpc", baseURL: "/restApi/deviceStatus" }).axiosInstn;
    const indexDBed = new IndexDBed();
    await indexDBed.Init();
    const results = await indexDBed.DataSelect();
    const examAnswerParamsProto = new ExamAnswerParams();
    results.forEach((one, idx) => {
        const examAnswerProto = new ExamAnswer();
        examAnswerProto.setId(one.id);
        examAnswerProto.setAnswer(one.answer);
        examAnswerParamsProto.addList(examAnswerProto);
    });
    const tttt = examAnswerParamsProto.serializeBinary();
    console.log(tttt);

    await grpcAxios
        .post("/insertExamAnswer", tttt, {
            responseType: "arraybuffer",
        })
        .then(result => {
            const { flag, data } = result;
            console.log(result.data);
            console.log(ExamAnswerParams.deserializeBinary(result.data).toObject());
        })
        .catch(e => console.error(e))
        .finally(() => {});

    const params = {
        list: results,
    };

    await axios
        .post("/restApi/deviceStatus/jsonInsertExamAnswer", { params })
        .then(result => {
            const { flag, data } = result;
            console.log(result.data);
            /*  const statusProto = deviceStatusProto.lookupType("DeviceStatusList");
            const decodeData = statusProto.decode(data);
            decodeData.list.map(one => console.log(one)); */
        })
        .catch(e => console.error(e))
        .finally(() => {});

    const pyThonMirror = new PyThonMirror({ el: document.getElementById("code"), output: document.getElementById(`output`) });
    document.getElementById(`pythonRun`).addEventListener("click", () => {
        pythonPrintData = [];
        PrintData(pyThonMirror);
    });

    const question = new Question({ question: exam_question_list, type: "m", cm: pyThonMirror, db: indexDBed });
    question.CreateQuestionWrap();

    if (results.length > 0) {
        results.forEach(one => {
            const { id, answer } = one;
            const probEl = document.getElementById(`questionWrap_${id}`);
            if (!probEl) return;
            probEl.childNodes.forEach(child => {
                if (child.nodeType === 1 && answer) {
                    if (child.dataset.sampleNum == answer) {
                        child.classList.add("ex-samp-selected");
                    }
                }
            });
        });
    }

    const pyodideInst = await loadPyodide({
        stdout: PrintData,
        stdin: text => {
            console.log(text);
            return text;
        },
    })
        .then(async result => {
            console.log("%c [ Python Module Load Success!!! ]", "color : green; font-size : 15px");
            Notiflix.Loading.remove();
            //await result.loadPackage("numpy");
            //await result.loadPackage("micropip");
            //const micropip = result.pyimport("micropip");
            //await micropip.install("matplotlib");
            return result;
        })
        .catch(err => {
            Notiflix.Loading.remove();
            Notiflix.Report.info("안내", "Python 모듈 실행에 실패하였습니다.", "확인");
            console.log(err);
            console.log("%c Python Module Load Fail...", "color : red; font-size : 15px");
            return false;
        });

    function PrintData(e) {
        if (typeof e !== "string") {
            if (!pyodideInst) {
                alert("파이썬 모듈 로드 실패");
                return;
            }
            try {
                e.addToOutput = { result: true, data: pyodideInst.runPython(e.editor.getValue()) };
            } catch (err) {
                e.addToOutput = { result: false, data: err };
            }
        } else {
            pythonPrintData.push(e);
        }
    }

    //CodeMirror onChange
    pyThonMirror.editor.on("changes", (e, val) => {
        //console.log(this.editor.getValue());
    });
    //CodeMirror Blur
    pyThonMirror.editor.on("blur", async (e, val) => {
        //이전번호 데이터 저장
        await indexDBed.CONNECTION.insert({
            into: "questions",
            upsert: true,
            values: [
                {
                    id: parseInt(pyThonMirror.probNum),
                    answer: pyThonMirror.editor.getValue(),
                },
            ],
        });
    });

    question.question
        .filter(oneProb => oneProb["questType"] === 3)
        .forEach(one => {
            const { probNum } = one;
            const btn = question.StringToDom(
                `<button type="button" name="subProbBtn" class="btn btn-secondary btn-lg p-3 m-2" data-sub-num=${probNum} style="display: none">${probNum}번 문제</button>`
            );
            //주관식 문제 이동 Btn
            btn.addEventListener("click", async e => {
                //console.log(`이전 주관식 번호 :: ${pyThonMirror.probNum}`);
                const subNum = e.target.dataset.subNum;
                console.log(`클릭한 주관식 번호 :: ${subNum}`);
                console.log(`이전 주관식 번호 :: ${pyThonMirror.probNum}`);
                console.log(pyThonMirror.editor.getValue());
                //이전번호 데이터 저장
                await indexDBed.CONNECTION.insert({
                    into: "questions",
                    upsert: true,
                    values: [
                        {
                            id: parseInt(pyThonMirror.probNum),
                            answer: pyThonMirror.editor.getValue(),
                        },
                    ],
                });
                //현재 이동된 주관식 문제의 데이터 조회
                const results = await indexDBed.DataSelect(subNum);
                question.CreateSubjectiveQuestion(subNum);
                if (results.length > 0) {
                    if (results[0]["answer"] != "") {
                        pyThonMirror.editor.setValue(results[0]["answer"]);
                    }
                }
                pyThonMirror.probNum = subNum;
                //pyThonMirror.editor.addLineClass(5, "wrap", "line-top");
                document.getElementById("output").value = null;
                //pyThonMirror.editor.focus();
            });

            $(document.getElementById("probBtn")).append(btn);
        });

    const answer = new Answer(exam_question_list);

    const tabEl = document.querySelectorAll('a[data-mdb-toggle="pill"]');
    tabEl.forEach(oneTab =>
        oneTab.addEventListener("shown.mdb.tab", e => {
            setTimeout(() => {
                TabCntr(e);
            }, 300);
        })
    );

    async function TabCntr(event) {
        //주관식
        if (event.target.id === "ex-2-tab-1") {
        } else {
            //객관식에서 답 선택번호
            Array.from(document.querySelectorAll(".ex-samp-selected")).map(async oneProb => {
                const { num, type, sampleNum } = oneProb.dataset;
                answer.answerStore = {
                    prob: parseInt(num),
                    answer: sampleNum,
                };

                await indexDBed.CONNECTION.insert({
                    into: "questions",
                    upsert: true,
                    values: [
                        {
                            id: parseInt(num),
                            answer: sampleNum,
                        },
                    ],
                });
            });
            const cc = document.querySelector("#allQuestionWrap_s");
            if (!cc.firstElementChild) {
                //주관식 문제들 중, 가장 앞 번호 문제
                const firstSubProb = question.question
                    .filter(oneProb => oneProb["questType"] === 3)
                    .reduce((pre, now) => {
                        return pre["probNum"] < now["probNum"] ? pre : now;
                    });
                pyThonMirror.probNum = firstSubProb["probNum"];
                question.CreateSubjectiveQuestion(firstSubProb["probNum"]);
                //현재 이동된 주관식 문제의 데이터 조회
                const results = await indexDBed.DataSelect(firstSubProb["probNum"]);
                if (results.length > 0) {
                    pyThonMirror.editor.setValue(results[0]["answer"]);
                }
                setTimeout(() => {
                    pyThonMirror.editor.refresh();
                }, 300);
            }
            pyThonMirror.editor.focus();
            document.getElementsByName("subProbBtn").forEach(oneBtn => (oneBtn.style.display = "block"));
        }
        console.log(event.target.id);
        console.log(event.relatedTarget.id);
        //event.target; // newly activated tab
        //event.relatedTarget; // previous active tab
    }
});
