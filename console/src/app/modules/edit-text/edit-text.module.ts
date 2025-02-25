import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { CopyToClipboardModule } from 'src/app/directives/copy-to-clipboard/copy-to-clipboard.module';
import { InputModule } from 'src/app/modules/input/input.module';

import { FormFieldModule } from '../form-field/form-field.module';
import { InfoSectionModule } from '../info-section/info-section.module';
import { EditTextComponent } from './edit-text.component';

@NgModule({
  declarations: [EditTextComponent],
  imports: [
    CommonModule,
    InfoSectionModule,
    ReactiveFormsModule,
    FormsModule,
    InputModule,
    FormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    MatTooltipModule,
    TextFieldModule,
    CopyToClipboardModule,
  ],
  exports: [EditTextComponent],
})
export class EditTextModule {}
