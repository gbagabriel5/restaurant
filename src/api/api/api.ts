export * from './clienteController.service';
import { ClienteControllerService } from './clienteController.service';
export * from './fornecedorController.service';
import { FornecedorControllerService } from './fornecedorController.service';
export * from './produtoController.service';
import { ProdutoControllerService } from './produtoController.service';
export const APIS = [ClienteControllerService, FornecedorControllerService, ProdutoControllerService];
