import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList, IonSpinner,
  IonTitle, IonToast,
  IonToolbar
} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../../components/container/container.component";
import {signUpUser} from "../../../services/authService";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, ReactiveFormsModule, IonList, IonItem, IonLabel, IonInput, IonButton, IonSpinner, IonToast]
})
export class SignupPage implements OnInit {

  loading = false;
  message: string | null = null;
  private fb = inject(FormBuilder);

  signUpForm: FormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor() { }

  ngOnInit() {
  }

  async submitForm() {
    this.loading = true;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    const confirmPassword = this.signUpForm.value.confirmPassword;

    if (password !== confirmPassword) {
      this.message = 'Passwords do not match';
      this.loading = false;
      return;
    }

    const response = await signUpUser(email, password);
    this.loading = false;

    if (response.success) {
      this.message = 'Successfully registered';
    } else {
      this.message = `Error: ${response.message}`;
    }
  }

}
