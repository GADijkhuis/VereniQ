import { Component, OnInit } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-email-confirmation-animation',
  templateUrl: './email-confirmation-animation.component.html',
  imports: [
    MatIcon,
    NgIf
  ],
  styleUrls: ['./email-confirmation-animation.component.scss']
})
export class EmailConfirmationAnimationComponent implements OnInit {
  visible = true;
  isFading = false;
  private cycleTimer: any = null;
  private fadeTimer: any = null;
  private restartDelay = 10000;
  private fadeDuration = 700;

  ngOnInit() {
    this.startCycle();
  }

  ngOnDestroy() {
    this.clearTimers();
  }

  private startCycle() {
    this.clearTimers();
    this.cycleTimer = setInterval(() => this.runOneCycle(), this.restartDelay);
    this.scheduleFadeAndReset();
  }

  private runOneCycle() {
    if (!this.visible) {
      this.visible = true;
      setTimeout(() => this.scheduleFadeAndReset(), 50);
    } else {
      this.scheduleFadeAndReset();
    }
  }

  private scheduleFadeAndReset() {
    if (this.fadeTimer) { clearTimeout(this.fadeTimer); this.fadeTimer = null; }

    const fadeStartIn = Math.max(0, this.restartDelay - this.fadeDuration);
    this.isFading = false;

    this.fadeTimer = setTimeout(() => {
      this.isFading = true;
      setTimeout(() => {
        this.isFading = false;
        this.visible = false;
        setTimeout(() => this.visible = true, 50);
      }, this.fadeDuration);
    }, fadeStartIn);
  }

  private clearTimers() {
    if (this.cycleTimer) { clearInterval(this.cycleTimer); this.cycleTimer = null; }
    if (this.fadeTimer)  { clearTimeout(this.fadeTimer); this.fadeTimer = null; }
  }
}
