import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared-modules/material.module";
import { PracButtonComponent } from "./prac-button.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        PracButtonComponent
    ],
    exports: [
        PracButtonComponent
    ]
})

export class PracButtonModule { }