import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private cartSource = new BehaviorSubject<string>("false")
    cartStatus = this.cartSource.asObservable()

    constructor() {
        this.cartStatus.subscribe(status =>
            localStorage.setItem("CART_OPEN", status)
        )
    }

    getCartStatus() {
        let isCartOpened = localStorage.getItem("CART_OPEN")
        isCartOpened = (isCartOpened === "false" || isCartOpened === null) ? "true" : "false"
        this.cartSource.next(isCartOpened)
        return this.cartStatus
    }
}