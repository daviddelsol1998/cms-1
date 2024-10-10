import { Component } from '@angular/core';
import { ContactListComponent } from "../contacts/contact-list/contact-list.component";
import { DocumentDetailComponent } from "./document-detail/document-detail.component";
import { DocumentListComponent } from "./document-list/document-list.component";
import { Document } from './document.model';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [ContactListComponent, DocumentDetailComponent, DocumentListComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

  selectedDocument: Document;

  onSelectedDocument(document: Document) {
    this.selectedDocument = document;
  }
}
