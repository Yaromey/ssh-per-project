import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {internalIpV4} from "internal-ip";
import {BehaviorSubject} from "rxjs";

interface SavedUrl {
  displayUrl: string;
  displayUrlName: string;
  fullUrl: string;
}

@Component({
  selector: 'test-url',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule here
  templateUrl: './test-url.component.html',
  styleUrl: './test-url.component.css'
})
export class TestUrlComponent implements OnInit {
  currentUrl = '';
  name = '';
  savedUrls: SavedUrl[] = [];
  prefixObs$ = new BehaviorSubject('');
  port$ = new BehaviorSubject('');
  protocol$ = new BehaviorSubject('');
  localIp: string | undefined;
  prefix = '';


  constructor() {
  }

  ngOnInit() {
    this.loadSavedUrls();
    this.getLocalIp();
  }

  private loadSavedUrls() {
    const savedUrlsJson = localStorage.getItem('savedUrls');
    if (savedUrlsJson) {
      this.savedUrls = JSON.parse(savedUrlsJson);
    }
  }

  getLocalIp() {
    internalIpV4().then(res => {
      this.localIp = res
    })
  }

  deleteUrl(index: number) {
    this.savedUrls.splice(index, 1);
    this.saveUrlsToLocalStorage();

  }

  saveUrl() {
    if (this.currentUrl.trim() !== '' && this.localIp) {
      const displayUrl = this.currentUrl;
      const displayUrlName = this.name;
      const fullUrl = `${this.prefixObs$.getValue()}:4200/${this.currentUrl}`;
      this.savedUrls.push({displayUrl, fullUrl, displayUrlName});

      this.saveUrlsToLocalStorage();
      this.currentUrl = '';
      this.name = '';
    }
  }

  private saveUrlsToLocalStorage() {
    localStorage.setItem('savedUrls', JSON.stringify(this.savedUrls));
  }

  copyUrl(url: SavedUrl) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url.displayUrl)
        .then(() => {
          console.log('URL copied to clipboard:', url);
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
        });
    } else {
      console.warn('Clipboard API not supported. Using fallback.');
      this.fallbackCopyTextToClipboard(url.displayUrl);
    }
  }

  fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      console.log('URL copied to clipboard:', text);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }

    document.body.removeChild(textArea);
  }
}
