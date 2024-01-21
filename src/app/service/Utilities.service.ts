import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Strings } from "./Strings";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { UserEntityPermissions } from "../Models/DTOs/PermissionDTOs/UserEntityPermissions";

@Injectable()
export class Utilities {
    public static userToken:string='';
    public static userPermisssions:UserEntityPermissions =null;
    currentUserPermissions = new BehaviorSubject<any | null>(null);
    currentUserPermissions$ = this.currentUserPermissions.asObservable();
    GetStatusName(statusId: any): string {
        return Strings.Statuses.find(x => x.id.toLowerCase() == statusId.toLowerCase())?.["name"] || "";
    }



    constructor(private router: Router, public datePipe: DatePipe,private translate:TranslateService) { }


     showMessage(msg = '', isSuccess = true) {
        let type = isSuccess ? 'success' : 'error';
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: isSuccess?3000:6000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '5px 10px',

        });
    }
 showConfirmDeleteMessage(itemName: string) {
        return Swal.fire({
            icon: 'error',
            title: "Are you sure to delete this "+ (itemName==""?this.translate.instant("this"):itemName) + ' ?',
            text: "you won't be able to revert this",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            padding: '2em',
            customClass: 'sweet-alerts',
            
        });
    }

    showConfirmMessage(action:string,itemName: string) {
        return Swal.fire({
            icon: 'info',
            title: this.translate.instant("areYouSureTo") +' '+ this.translate.instant(action) +' '+ (itemName==""?this.translate.instant("this"):itemName) + ' ?',
            text: '',
            showCancelButton: true,
            confirmButtonText: this.translate.instant(action),
            cancelButtonText: this.translate.instant("cancel"),
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
    showPasswordMessage(itemName: string,value:string) {
        return Swal.fire({
            icon: 'info',
            title: this.translate.instant("newPasswordIs") +'  '+value,
            text: '',
            showCancelButton: false,
            confirmButtonText: this.translate.instant("ok"),
            // cancelButtonText: this.translate.instant("cancel"),
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
    routeTo(route: string) {
        this.router.navigate([route]);
    }
    FormateDateToDateOnly(date:Date):any{
        return this.datePipe.transform(date,'dd-MM-yyyy')
    }
    FormatDateTime(date:Date):any{
        return this.datePipe.transform(date,'dd-MM-yyyy (hh:mm a)')
    }
    IsCurrentUserAdmin(permissions :UserEntityPermissions):boolean{
        const isAdmin = Object.values(permissions).every(per =>
          Object.values(per).every(value => value === true)
        );
        return isAdmin;
      }
}