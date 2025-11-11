import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { ExhibitionDataService } from "../../../services";
import { Observable } from "rxjs";
import { WineRegion } from "../../../models/wine-region";

@Component({
    selector: 'app-regions-list',
    templateUrl: './regions-list.component.html',
    styleUrls: ['./regions-list.component.scss'],
    standalone: true,
    imports: [CommonModule, MatTableModule]
})
export class RegionsListComponent implements OnInit {
    displayedColumns = ["nameBg", "nameEn", "color"];
    
    regions$: Observable<WineRegion[]> | undefined;
    
    constructor(private readonly exhibitionDataService: ExhibitionDataService) {

    }

    ngOnInit(): void {
        this.regions$ = this.exhibitionDataService.getWineRegions();
    }


}