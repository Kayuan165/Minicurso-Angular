import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../shared/interfaces/productInterface';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productService = inject(ProductsService);
  router = inject(Router);
  matSnackbar = inject(MatSnackBar);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productService.put(this.product.id, product).subscribe(() => {
      this.matSnackbar.open('Produto editado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
