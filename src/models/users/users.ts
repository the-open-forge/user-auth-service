
class Users {
    private _userName:string;
    private _passCode:string;

    constructor(userName: string, passCode: string) {
        this._userName = userName;
        this._passCode = passCode;
    };

    public  getUsername(): string {
        return this._userName
    };

    public getPassCode() :string {
        return this._passCode;
    };
};

export default Users;