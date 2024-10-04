import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CarService {
    endPoint: string = "http://localhost:8080/api/concensionary"

    constructor(private httpClient: HttpClient) { }

    getAll() {
        return this.httpClient.get(this.endPoint);
    }

    create(brand: string, model: string, power: string) {
        const headers = new HttpHeaders({
            'content-type': 'application/x-www-form-urlencoded'
        });

        const body = new URLSearchParams();
        body.append("brand", brand)
        body.append("model", model)
        body.append("power", power)

        return this.httpClient.post(this.endPoint, body, { headers })
    }

    delete(id: any){
        return this.httpClient.delete(`${this.endPoint}/${id}`);
    }

}