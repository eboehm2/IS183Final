import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class UserService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/User`)
        .toPromise()
        .then((resp) => {
            const users = resp.json();
            return users;
        });
    }

    async getUserById(userID): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/user/id/${userID}`).toPromise();
        const user = resp.json();
        return user || [];
    }

    async addUser(user): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/user`, user).toPromise();
        const newUser = resp.json();
        return newUser || null;
    }
    async deleteBeverage(userID): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/user/id/${userID}`).toPromise();
        const status = resp.json();
        return status;
    }

    async updateUser(userID, user): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/user/id/${userID}`, user).toPromise();
        const updatedUser = resp.json();
        return updatedUser;
    }
}
