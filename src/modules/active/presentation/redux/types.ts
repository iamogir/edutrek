export default class Status {

    constructor(
        public readonly statusId: number,
        public readonly statusName: string
    ) {
        this.statusId = statusId;
        this.statusName = statusName;
    }

    static fromJson(json: string): Status {
        const obj = JSON.parse(json);
        return Status.fromServerObject(obj);
    }

    static fromServerObject(obj: Status): Status {
        return new Status(obj.statusId, obj.statusName);
    }

}