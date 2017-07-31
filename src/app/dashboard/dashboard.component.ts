import { OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [FormBuilder, ProductsService]
})
export class DashboardComponent implements OnInit {
  public products: Product[];
  public modalRef: BsModalRef;
  form: FormGroup;
  userName: String = 'User';
  constructor(private router: Router,
    private modalService: BsModalService, private formBuilder: FormBuilder, private productsService: ProductsService) {
    this.form = formBuilder.group({
      id: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      rate: ['', Validators.required]
    }
    );
  }

  ngOnInit() {

    const user_Name = Cookie.get('user_name');
    if (user_Name.trim().length > 0) {
      this.userName = user_Name.split('@')[0];
    }
    this.productsService.getProducts().then(products => this.products = products);

  }

  public logout() {
    Cookie.delete('auth_key', '/');
    Cookie.deleteAll();
    if (!Cookie.get('auth_key')) {
      this.router.navigate(['/']);
    }
  }

  public openModal(template: TemplateRef<any>) {
    this.form.reset();
    this.modalRef = this.modalService.show(template);
  }
  onSubmit = function () {
    if (this.form.valid) {
      this.modalRef.hide();
      this.products.push(this.form.value);
    }

  }

  deleteProduct(index, record) {
    this.products.splice(index, 1);
  }
}
