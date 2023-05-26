var Lover = /** @class */ (function () {
    function Lover(idLover, name, zodiac, hometown, yearBirth, interest) {
        this._idLover = idLover;
        this._name = name;
        this._zodiac = zodiac;
        this._hometown = hometown;
        this._yearBirth = yearBirth;
        this._interest = interest;
    }
    Object.defineProperty(Lover.prototype, "idLover", {
        get: function () {
            return this._idLover;
        },
        set: function (value) {
            this._idLover = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "zodiac", {
        get: function () {
            return this._zodiac;
        },
        set: function (value) {
            this._zodiac = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "hometown", {
        get: function () {
            return this._hometown;
        },
        set: function (value) {
            this._hometown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "yearBirth", {
        get: function () {
            return this._yearBirth;
        },
        set: function (value) {
            this._yearBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lover.prototype, "interest", {
        get: function () {
            return this._interest;
        },
        set: function (value) {
            this._interest = value;
        },
        enumerable: false,
        configurable: true
    });
    return Lover;
}());
var ManageLover = /** @class */ (function () {
    function ManageLover() {
        this.listLover = [];
    }
    ManageLover.prototype.show = function () {
        if (this.listLover.length === 0) {
            console.log('khong co du lieu');
        }
        else {
            console.table(this.listLover);
        }
    };
    ManageLover.prototype.searchByName = function (name) {
        this.listLover = this.listLover.filter(function (item) { return item.name.includes(name); });
        this.show();
    };
    ManageLover.prototype.add = function (lover) {
        this.listLover.push(lover);
    };
    ManageLover.prototype.edit = function (idLover, lover) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].idLover === idLover) {
                this.listLover[i] = lover;
            }
        }
    };
    ManageLover.prototype.delete = function (idLover) {
        this.listLover = this.listLover.filter(function (item) { return item.idLover !== idLover; });
    };
    return ManageLover;
}());
var answer = require('readline-sync');
var my = new ManageLover();
var choice = -1;
while (true) {
    console.log('Nhap vao lua chon:' +
        '\n 1. Show' +
        '\n 2. Add' +
        '\n 3. Delete' +
        '\n 4. Edit' +
        '\n 5. Search by Name' +
        '\n 0. Exit');
    choice = answer.question('chon di: ');
    if (choice == 1) {
        my.show();
    }
    if (choice == 2) {
        console.log('nhap thong tin moi: ');
        var _idLover = answer.question('nhap ID nguoi yeu: ');
        var _name = answer.question('ten nguoi yeu: ');
        var _zodiac = answer.question('nhap cung hoang dao: ');
        var _hometown = answer.question('que quan: ');
        var _yearBirth = answer.question('nam sinh: ');
        var _interest = answer.question('so thich: ');
        my.add(new Lover(_idLover, _name, _zodiac, _hometown, _yearBirth, _interest));
    }
    if (choice == 3) {
        var idLover = answer.question('nhap ID can xoa');
        my.delete(idLover);
    }
    if (choice == 4) {
        var idLover = answer.question('nhap ID can sua');
        var name_1 = answer.question('ten nguoi yeu: ');
        var zodiac = answer.question('cung hoang dao: ');
        var hometown = answer.question('que quan: ');
        var yearBirth = answer.question('nam sinh: ');
        var interest = answer.question('so thich: ');
        my.edit(idLover, new Lover(idLover, name_1, zodiac, hometown, yearBirth, interest));
    }
    if (choice == 5) {
        var name_2 = answer.question('nhap ten can tim: ');
        my.searchByName(name_2);
    }
    if (choice == 0) {
        break;
    }
}
