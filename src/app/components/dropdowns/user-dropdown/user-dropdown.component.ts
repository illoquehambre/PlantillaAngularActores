import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";
import { AccountdetailResponse } from "src/app/interfaces/account-detail.interface";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-user-dropdown",
  templateUrl: "./user-dropdown.component.html",
})
export class UserDropdownComponent implements AfterViewInit {
  dropdownPopoverShow = false;
  login= localStorage.getItem('session_id')
  detail_path: string = {} as string
constructor(private authService: AuthService){}

ngOnInit(): void {
  this.getDetails();
}

  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef = {} as ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef = {} as ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  getDetails(){
    this.authService.getAccountDetail().subscribe((res) => {
      this.detail_path=res.avatar.tmdb.avatar_path
      console.log(this.detail_path)
    })
  }
  showImg() {    
    return `${environment.posterPath}/${this.detail_path}`;
  }

}
