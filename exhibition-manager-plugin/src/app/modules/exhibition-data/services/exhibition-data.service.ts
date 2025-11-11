import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { WineRegion } from "../models/wine-region";

@Injectable({
    providedIn: 'root'
})
export class ExhibitionDataService {
    dispplayedColumns = ['nameBg', 'nameEn', 'color'];
    
    getWineRegions(): Observable<WineRegion[]> {
        return of([
            { id: 1, nameBg: 'Северозападна България', nameEn: 'Northwest Bulgaria', color: '#339999', order: 1 },
            { id: 2, nameBg: 'Централна Дунаавска равнина', nameEn: 'Cewntral Danube Plain', color: '#663399', order: 2 },
            { id: 3, nameBg: 'Северно Черноморие', nameEn: 'North Black Sea Region', color: '#53bbe6', order: 3 },
            { id: 4, nameBg: 'Южно Черноморие', nameEn: 'South Black Sea Region', color: '#0066CC', order: 4 },
            { id: 5, nameBg: 'Сакар и Източни Родопи', nameEn: 'Sakar and Eastern Rhodopes', color: '#FF9966', order: 5 },
            { id: 6, nameBg: 'Източна Тракия', nameEn: 'Eastern Thrace', color: '#99CC66', order: 6 },
            { id: 7, nameBg: 'Западна Тракия и Розова долина', nameEn: 'West Thrace & Rose Valley', color: '#996699', order: 7 },
            { id: 8, nameBg: 'Долината на Струма', nameEn: 'Struma River Valley', color: '#CC0033', order: 8 },
            { id: 9, nameBg: 'Винени проекти', nameEn: 'Wine Projects', color: '#663333', order: 9 },
        ]);
    }
}