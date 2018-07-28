import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { CurrentUser } from '../../../model/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('', '', '', '');
  shared: SharedService;
  message: String;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

  login() {
    this.message = '';
    this.userService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showtemplate.emit(true);
      this.router.navigate(['/']);
    }, error => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showtemplate.emit(false);
      this.message = 'Erro';
    });
  }

  cancelLogin() {
    this.message = '';
    this.user = new User('', '', '', '');
    window.location.href = '/login';
    window.location.reload();
  }

  getFromGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }
}
