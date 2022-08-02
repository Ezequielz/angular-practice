export interface IResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        IUser[];
    support:     Support;
}

 interface IUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}
 interface Support {
    url:  string;
    text: string;
}