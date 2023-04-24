'use strict';

/** IndexDB 정의 */
class IndexDBed {
	constructor() {
		this.DB; //instance
		this.CONNECTION = new JsStore.Connection(new Worker('/static/js/lib/jsstore.worker.min.js')); //워커 쓰레드 정의
	}
	/** 초기화 */
	async Init() {
		const defineDB = {
			name: 'EXAM_DB',
			tables: [this.TableDefine({ tbName: 'exam' }), this.TableDefine({ tbName: 'questions' })],
		};
		this.DB = await this.CONNECTION.initDb(defineDB);
		if (this.DB) {
			console.log(`%c Db Created & connection is opened`, `color : blue`);
		} else {
			console.log(`%c Db Connection is opened`, `color : blue`);
		}
	}
	/**
	 * 테이블 정의
	 * @param {String} tbName 테이블명
	 * @returns Object
	 */
	TableDefine({ tbName }) {
		const tableForm = {
			name: tbName,
			columns: {
				id: { primaryKey: true, autoIncrement: true },
			},
		};
		if (tbName === 'exam') {
			tableForm['columns']['examNm'] = { notNull: true, dataType: 'string' };
			tableForm['columns']['actionDate'] = { notNull: true, dataType: 'string' };
		} else if (tbName == 'questions') {
			tableForm['columns']['answer'] = { notNull: false, dataType: 'string' };
		}
		return tableForm;
	}
	/**
	 * DB 데이터 조회
	 * @param {String} condition 조회조건
	 * @returns Array
	 */
	async DataSelect(condition = null) {
		const query = {
			from: 'questions',
		};
		if (condition) {
			//delete query["where"];
			query['where'] = { id: parseInt(condition) };
		}
		const result = await this.CONNECTION.select(query).catch(e => {
			console.error(e);
			return [];
		});
		return result;
	}
}

export { IndexDBed };
