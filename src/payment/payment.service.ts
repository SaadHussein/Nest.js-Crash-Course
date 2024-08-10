import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const response = await this.paymentsRepository.save(createPaymentDto);
    return response;
  }

  async findAll() {
    const response = await this.paymentsRepository.find();
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const selectedPayment = await this.paymentsRepository.findOneBy({ id: id });
    selectedPayment.currency = updatePaymentDto.currency;
    const updatedPayment = await this.paymentsRepository.save(selectedPayment);
    return updatedPayment;
  }

  async remove(id: number) {
    const response = await this.paymentsRepository.delete(id);
    return response;
  }
}
