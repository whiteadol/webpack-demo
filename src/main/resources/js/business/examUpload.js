"use strict";

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
    constructor({ question, type, cm }) {
        this.cm = cm;
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
                <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-3">
                </div>
            </div>
            `);
            switch (questType) {
                case 1:
                    if (sample) {
                        sample.forEach((data, idx) => {
                            const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx + 1}>${this.mapper[idx]} ${data}</p>`);
                            p.addEventListener("click", e => {
                                e.currentTarget.parentNode.childNodes.forEach(one => {
                                    if (one.nodeType === 1) one.classList.remove("ex-samp-selected");
                                });
                                setTimeout(() => e.target.classList.add("ex-samp-selected"), 50);
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
                                            <pre class="card-text lh-base m-0 p-4" id="result" style="overflow: hidden"></pre>
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
                            p.addEventListener("click", e => {
                                e.currentTarget.parentNode.childNodes.forEach(one => {
                                    if (one.nodeType === 1) one.classList.remove("ex-samp-selected");
                                });
                                setTimeout(() => e.target.classList.add("ex-samp-selected"), 50);
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
            const { examNm, problem, problemSample, questType, questTypeLv, permitLine, sample } = subProb;
            const questionNum = subProbIdx + 1;
            this.cm.permitLines = permitLine;
            const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row p-2">
                <div class="ex-prb">문제 ${questionNum}】${problem}</div>
                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="color: black;white-space : pre;background: aliceblue;"></pre>
            </div> `);
            elemnt.getElementsByTagName("pre")[0].innerHTML = problemSample.condition;
            if (questTypeLv === 2) {
                console.log(problemSample.result);
                console.log(permitLine);
                this.cm.editor.setValue(problemSample.result);
            } else {
                this.cm.editor.setValue("");
            }
            $(document.getElementById("allQuestionWrap_s")).empty();
            $(document.getElementById("allQuestionWrap_s")).append(elemnt);
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

class ExcelParse {
    constructor({ workBook }) {
        this.sheets = workBook.SheetNames;
        this.sheetJsonStore = this.sheets
            .map((oneSheet, idx) => {
                return {
                    examType: this.sheets[idx],
                    data: XLSX.utils.sheet_to_json(workBook.Sheets[oneSheet]),
                };
            })
            .map(obj => this.ReturnTypeFrom(obj))
            .flat()
            .map((one, idx) => {
                one["probNum"] = idx + 1;
                return one;
            });
    }

    //객관식 - 보기만 존재
    ExamType_0(examProb) {
        return examProb.flatMap((row, idx, array) => {
            const { __rowNum__ } = row;
            if (__rowNum__ % 5 !== 0) return [];
            const oneProb = array.slice(__rowNum__ - 5, __rowNum__);
            const examForm = this.#ExamForm();
            examForm["questType"] = 1;
            examForm["problem"] = Object.values(oneProb[0])[0];
            examForm["sample"] = oneProb.flatMap((one, idx) => (idx > 0 ? Object.values(one)[0] : []));
            return examForm;
        });
    }
    /**
     * 객관식 - 조건 및 결과 출력 화면 존재
     * @param {*} examProb
     */
    ExamType_1(examProb) {
        return examProb.flatMap((row, idx, array) => {
            const { __rowNum__ } = row;
            if (__rowNum__ % 7 !== 0) return [];
            const oneProb = array.slice(__rowNum__ - 7, __rowNum__);
            const [problem, condition, result] = [Object.values(oneProb[0])[0], Object.values(oneProb[1])[1], Object.values(oneProb[2])[1]];
            const examForm = this.#ExamForm();
            examForm["questType"] = 2;
            examForm["problem"] = problem;
            examForm["problemSample"] = { condition, result };
            examForm["sample"] = oneProb.flatMap((one, idx) => (idx > 2 ? Object.values(one)[0] : []));
            return examForm;
        });
    }

    ExamType_2(examProb) {
        return examProb.flatMap((row, idx, array) => {
            if (idx % 2 !== 0) return [];
            const oneProb = array.slice(idx, idx + 2);
            const probNum = parseInt(idx / 2);
            const [problem, condition] = [Object.values(oneProb[0])[0], Object.values(oneProb[1])[1]];
            const examForm = this.#ExamForm();
            examForm["questType"] = 3;
            examForm["questTypeLv"] = 1;
            examForm["problem"] = problem;
            examForm["problemSample"]["condition"] = condition;
            return examForm;
        });
    }

    ExamType_3(examProb) {
        return examProb.flatMap((row, idx, array) => {
            if (idx % 4 !== 0) return [];
            const oneProb = array.slice(idx, idx + 4);
            let [problem, condition, result, permitLine] = [Object.values(oneProb[0])[0], Object.values(oneProb[1])[1], Object.values(oneProb[2])[1], Object.values(oneProb[3])[1]];
            const examForm = this.#ExamForm();
            console.log(typeof permitLine);
            try {
                if (typeof permitLine === "string") {
                    permitLine = permitLine.split(",").map(limitRow => parseInt(limitRow));
                } else if (typeof permitLine === "number") {
                    permitLine = [parseInt(permitLine)];
                }
            } catch (error) {
                console.error(error);
            }
            examForm["questType"] = 3;
            examForm["questTypeLv"] = 2;
            examForm["problem"] = problem;
            examForm["permitLine"] = permitLine;
            examForm["problemSample"] = { condition, result };
            return examForm;
        });
    }

    ReturnTypeFrom(examData) {
        switch (examData.examType) {
            case "객관식 유형1":
                return this.ExamType_0(examData.data);
            case "객관식 유형2":
                return this.ExamType_1(examData.data);
            case "주관식 유형1":
                return this.ExamType_2(examData.data);
            case "주관식 유형2":
                return this.ExamType_3(examData.data);
        }
    }

    #ExamForm() {
        return {
            examNm: "Python_20230109",
            probNum: 0,
            questType: 0,
            questTypeLv: 0,
            permitLine: [],
            problem: "",
            problemSample: {
                condition: "",
                result: null,
            },
            sample: null,
        };
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    Notiflix.Loading.hourglass("Python 모듈을 불러오는 중입니다. 잠시만 기다려 주십시오.");

    let question;
    let answer;

    const indexDBed = new IndexDBed();
    await indexDBed.Init();
    const results = await indexDBed.DataSelect();

    const pyThonMirror = new PyThonMirror({ el: document.getElementById("code"), output: document.getElementById(`output`) });
    document.getElementById(`pythonRun`).addEventListener("click", () => {
        pythonPrintData = [];
        PrintData(pyThonMirror);
    });

    document.getElementById("excelFile").addEventListener("change", event => {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            var fileData = reader.result;
            var wb = XLSX.read(fileData, { type: "binary" });
            const excelParse = new ExcelParse({ workBook: wb });
            //question = new Question({ question: exam_question_list, type: "m", cm: pyThonMirror });
            question = new Question({ question: excelParse.sheetJsonStore, type: "m", cm: pyThonMirror });
            question.CreateQuestionWrap();
            answer = new Answer(excelParse.sheetJsonStore);

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

            question.question
                .filter(oneProb => oneProb["questType"] === 3)
                .forEach(one => {
                    const { probNum } = one;
                    const btn = question.StringToDom(
                        `<button type="button" name="subProbBtn" class="btn btn-secondary btn-lg p-3 m-2" data-prob-num=${probNum} style="display: none">${probNum}번 문제</button>`
                    );

                    //주관식 문제 이동 Btn
                    btn.addEventListener("click", async e => {
                        //console.log(`이전 주관식 번호 :: ${pyThonMirror.probNum}`);
                        const probNum = e.target.dataset.probNum;
                        console.log(`클릭한 주관식 번호 :: ${probNum}`);
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
                        const results = await indexDBed.DataSelect(probNum);
                        question.CreateSubjectiveQuestion(probNum);
                        if (results.length > 0) {
                            pyThonMirror.editor.setValue(results[0]["answer"]);
                        }
                        pyThonMirror.probNum = probNum;
                        //pyThonMirror.editor.addLineClass(5, "wrap", "line-top");
                        document.getElementById("output").value = null;
                        //pyThonMirror.editor.focus();
                    });

                    $(document.getElementById("probBtn")).append(btn);
                });
        };
        reader.readAsBinaryString(input.files[0]);
    });

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

    const pyodideInst = await loadPyodide({
        stdout: PrintData,
        stdin: text => {
            console.log(text);
            return text;
        },
    })
        .then(async result => {
            console.log("Python Module Load Success!!!");
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
            console.log("Python Module Load Fail...");
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
