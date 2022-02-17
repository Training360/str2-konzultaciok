import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase-example';

  newProduct: Product = new Product();

  productCollection = this.firestore.collection<Product>('product');

  productList$: any = this.productCollection.valueChanges({idField: 'id'});

  constructor(
    private firestore: AngularFirestore,
  ) {}

  ngOnInit(): void {

  }

  onDelete(product: Product): void {
    const doc = this.productCollection.doc(product.id);
    doc.delete().then(
      () => alert('Document has been deleted.'),
    )
  }

  onUpdate(product: Product): void {
    const doc = this.productCollection.doc(product.id);

    const plain = {...product};
    doc.update(plain);
  }

  onCreate(): void {
    const plain = {...this.newProduct};
    delete plain.id;
    this.productCollection.add(plain);

  }

}
