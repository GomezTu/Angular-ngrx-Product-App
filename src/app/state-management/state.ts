import { Employee } from '../models/employee';
import { Message } from '../models/message';
import { Product } from '../models/product';

export interface State {
    employees: Employee[];
    messages: Message[];
    products: Product[];
}
