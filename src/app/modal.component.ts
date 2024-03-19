import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
constructor(private dialogRef: DynamicDialogRef, public config: DynamicDialogConfig){}

  ngOnInit(): void {
    console.log(this.config.data.user)
    // const user={"name":"prem", "age":12}
    const obj= {user:{"name":"prem", "age":12}}
    console.log(obj.user)
  }

  close(){
    this.dialogRef.close({"action":"ok"})
  }
}
