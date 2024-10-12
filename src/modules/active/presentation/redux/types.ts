export default class DropList {

    constructor(
        public readonly id: number,
        public readonly name: string
    ) {
        this.id = id;
        this.name = name;
    }

    static fromJson(json: string): DropList {
        const obj = JSON.parse(json);
        return DropList.fromServerObject(obj);
    }

    static fromServerObject(obj: DropList): DropList {
        return new DropList(obj.id, obj.name);
    }

}