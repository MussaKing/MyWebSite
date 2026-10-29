import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

// Сайт статический, поэтому письма отправляет Web3Forms на mussa.developer@gmail.com.
// Ключ публичный: он только указывает, на какую почту пересылать сообщения.
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '5574808f-ba71-4b5b-b790-5213270a510a';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  model = { name: '', email: '', message: '', honey: '' };
  status = signal<Status>('idle');

  async send(form: NgForm) {
    if (form.invalid || this.status() === 'sending') return;
    // Скрытое поле заполняют только боты
    if (this.model.honey) return;

    this.status.set('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Новое сообщение с сайта',
          from_name: 'Сайт-портфолио',
          name: this.model.name,
          email: this.model.email,
          message: this.model.message
        })
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message ?? String(res.status));
      this.status.set('sent');
      form.resetForm();
    } catch {
      this.status.set('error');
    }
  }
}
