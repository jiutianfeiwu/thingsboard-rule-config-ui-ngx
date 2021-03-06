import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppState } from '@core/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { COMMA, ENTER, SEMICOLON } from '@angular/cdk/keycodes';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'tb-filter-node-check-message-config',
  templateUrl: './check-message-config.component.html',
  styleUrls: ['./check-message-config.component.scss']
})
export class CheckMessageConfigComponent extends RuleNodeConfigurationComponent implements OnInit, AfterViewInit {

  checkMessageConfigForm: FormGroup;

  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.validateConfig()) {
        this.notifyConfigurationUpdated(null);
      }
    }, 0);
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.checkMessageConfigForm = this.fb.group({
      messageNames: [configuration ? configuration.messageNames : null, []],
      metadataNames: [configuration ? configuration.metadataNames : null, []],
      checkAllKeys: [configuration ? configuration.checkAllKeys : false, []],
    });
    this.checkMessageConfigForm.valueChanges.subscribe((updated: RuleNodeConfiguration) => {
      if (this.validateConfig()) {
        this.notifyConfigurationUpdated(this.checkMessageConfigForm.value);
      } else {
        this.notifyConfigurationUpdated(null);
      }
    });
  }

  private validateConfig(): boolean {
    const messageNames: string[] = this.checkMessageConfigForm.get('messageNames').value;
    const metadataNames: string[] = this.checkMessageConfigForm.get('metadataNames').value;
    return messageNames.length > 0 || metadataNames.length > 0;
  }

  removeMessageName(messageName: string): void {
    const messageNames: string[] = this.checkMessageConfigForm.get('messageNames').value;
    const index = messageNames.indexOf(messageName);
    if (index >= 0) {
      messageNames.splice(index, 1);
      this.checkMessageConfigForm.get('messageNames').setValue(messageNames, {emitEvent: true});
    }
  }

  removeMetadataName(metadataName: string): void {
    const metadataNames: string[] = this.checkMessageConfigForm.get('metadataNames').value;
    const index = metadataNames.indexOf(metadataName);
    if (index >= 0) {
      metadataNames.splice(index, 1);
      this.checkMessageConfigForm.get('metadataNames').setValue(metadataNames, {emitEvent: true});
    }
  }

  addMessageName(event: MatChipInputEvent): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let messageNames: string[] = this.checkMessageConfigForm.get('messageNames').value;
      if (!messageNames || messageNames.indexOf(value) === -1) {
        if (!messageNames) {
          messageNames = [];
        }
        messageNames.push(value);
        this.checkMessageConfigForm.get('messageNames').setValue(messageNames, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }

  addMetadataName(event: MatChipInputEvent): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let metadataNames: string[] = this.checkMessageConfigForm.get('metadataNames').value;
      if (!metadataNames || metadataNames.indexOf(value) === -1) {
        if (!metadataNames) {
          metadataNames = [];
        }
        metadataNames.push(value);
        this.checkMessageConfigForm.get('metadataNames').setValue(metadataNames, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }

}
