type ZodiacSign = "Bạch Dương" | "Kim Ngưu" | "Song Tử" | "Cự Giải" | "Sư Tử" | "Xử Nữ" | "Thiên Bình" | "Bọ Cạp" | "Nhân Mã" | "Ma Kết" | "Bảo Bình" | "Song Ngư";
class Lover{
    private _idLover:string
    private _name:string
    private _zodiac:ZodiacSign
    private _hometown:string
    private _yearBirth:number
    private _interest:string

    constructor(idLover: string, name: string, zodiac: ZodiacSign, hometown: string, yearBirth: number, interest: string) {
        this._idLover = idLover;
        this._name = name;
        this._zodiac = zodiac;
        this._hometown = hometown;
        this._yearBirth = yearBirth;
        this._interest = interest;
    }

    get idLover(): string {
        return this._idLover;
    }

    set idLover(value: string) {
        this._idLover = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): ZodiacSign {
        return this._zodiac;
    }

    set zodiac(value: ZodiacSign) {
        this._zodiac = value;
    }

    get hometown(): string {
        return this._hometown;
    }

    set hometown(value: string) {
        this._hometown = value;
    }

    get yearBirth(): number {
        return this._yearBirth;
    }

    set yearBirth(value: number) {
        this._yearBirth = value;
    }

    get interest(): string {
        return this._interest;
    }

    set interest(value: string) {
        this._interest = value;
    }
}
class ManageLover{
    listLover: Lover[]=[]

    show(){
        if (this.listLover.length === 0 ){
            console.log('khong co du lieu')
        }else{
            console.table(this.listLover)

        }

    }
    searchByName(name:string){
        if (this.listLover.length === 0 ){
            console.log('ko co du lieu')
        }else {
            this.listLover = this.listLover.filter(item => item.name.includes(name))
            this.show()
        }

    }
    add(lover:Lover ){
        this.listLover.push(lover)
    }
    edit(idLover:string , lover:Lover){
        for (let i = 0 ; i <this.listLover.length ; i++){
            if (this.listLover[i].idLover === idLover){
                this.listLover[i] = lover
            }
        }
    }
    delete(idLover:string){
            this.listLover = this.listLover.filter(item => item.idLover !== idLover)

    }

}
let answer = require('readline-sync')
let my = new ManageLover()
let choice = -1
while (true) {
    console.log('Nhap vao lua chon:' +
        '\n 1. Show' +
        '\n 2. Add' +
        '\n 3. Delete' +
        '\n 4. Edit' +
        '\n 5. Search by Name' +
        '\n 0. Exit')
    choice = answer.question('chon di: ')
    if (choice == 1){
        my.show()
    }
    if (choice == 2 ){
        console.log('nhap thong tin moi: ')
        let _idLover = answer.question('nhap ID nguoi yeu: ')
        let _name = answer.question('ten nguoi yeu: ')
        let _zodiac = answer.question('nhap cung hoang dao: ')
        let _hometown = answer.question('que quan: ')
        let _yearBirth = answer.question('nam sinh: ')
        let _interest = answer.question('so thich: ')
        my.add(new Lover(_idLover , _name , _zodiac , _hometown , _yearBirth , _interest))
    }
    if (choice == 3 ){
        let idLover = answer.question('nhap ID can xoa')
        my.delete(idLover)
    }
    if (choice == 4){
        let idLover = answer.question('nhap ID can sua' )
        let name = answer.question('ten nguoi yeu: ')
        let zodiac = answer.question('cung hoang dao: ')
        let hometown =answer.question('que quan: ')
        let yearBirth = answer.question('nam sinh: ')
        let interest = answer.question('so thich: ')
        my.edit(idLover, new Lover(idLover , name ,zodiac, hometown, yearBirth , interest))


    }
    if (choice == 5){
        let name= answer.question('nhap ten can tim: ')
        my.searchByName(name)

    }
    if(choice == 0 ){
        break
    }
}