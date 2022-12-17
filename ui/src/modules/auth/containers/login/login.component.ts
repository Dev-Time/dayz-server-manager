import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    public username = '';
    public password = '';
    public remember = false;

    public failure = '';

    public constructor(private auth: AuthService, private router: Router) {}

    public ngOnInit(): void {
        // ignore
    }

    public async login(): Promise<void> {
        this.failure = '';

        try {
            await this.auth.login(this.username, this.password, this.remember);
            await this.router.navigate(['/dashboard']);
        } catch (e) {
            console.error('Login failed', e);
            this.failure = 'Failed to login';
        }
    }

}
