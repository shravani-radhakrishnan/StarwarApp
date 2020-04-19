import { Component, OnInit, Input } from "@angular/core";
import {
  STARWAR_CHARACTERS,
  PLANETS,
  SPECIES,
  CHARACTER_KEYS,
  PLANET_KEYS,
  SPECIES_KEYS,
} from "../../../../core/constants/app.constant";
import { DataPassService } from "src/app/shared/shared/data-pass.service";
import { StorageService } from "src/app/core/services/storage.service";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.scss"],
})
export class TableViewComponent implements OnInit {
  selectedInfo;
  displayList;
  keysList;
  character_keys = CHARACTER_KEYS;
  planet_keys = PLANET_KEYS;
  species_keys = SPECIES_KEYS;
  constructor(
    private dataService: DataPassService,
    private storageService: StorageService
  ) {
    console.log("call me");
    if (
      this.storageService.getItem("selectedInfo") !== null &&
      this.storageService.getItem("selectedInfo")!==undefined
    ) {
      this.dataService.dataPass$.next(this.storageService.getItem("selectedInfo"));
    }
    this.dataService.dataPass$.subscribe((data) => {
      if (data) {
        this.selectedInfo = data;
        if (this.selectedInfo) {
          this.setData(this.selectedInfo);
        }
      } else {
        this.selectedInfo = this.storageService.getItem("selectedInfo");
        this.setData(this.selectedInfo);
      }
    });
    // this.selectedInfo = this.storageService.getItem('selectedInfo');
  }

  ngOnInit(): void {}

  setData(selectedInfo) {
    if (selectedInfo.name === "characters") {
      this.displayList = STARWAR_CHARACTERS.dataView.rows;
      this.keysList = this.character_keys;
    } else if (selectedInfo.name === "planets") {
      this.displayList = PLANETS.dataView.rows;
      this.keysList = this.planet_keys;
    } else if (selectedInfo.name === "species") {
      this.displayList = SPECIES.dataView.rows;
      this.keysList = this.species_keys;
    }
    this.storageService.setItem("selectedInfo", selectedInfo);
  }
}
