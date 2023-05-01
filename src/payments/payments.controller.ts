import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Query, Request } from '@nestjs/common/decorators'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { PaymentsService } from './payments.service'
import { Payment } from './schemas/payment.schemas'

@Controller('payments')
export class PaymentsCotroller{

    constructor(private readonly paymentsServise: PaymentsService) {
    }
    
    @Get()
    getAll(): Promise<Payment[]> {
        return this.paymentsServise.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Payment> {
        return this.paymentsServise.getById(id)
    }

    @Post()
    createClient(@Body() createPayment: CreatePaymentDto): Promise<Payment> {
        return this.paymentsServise.create(createPayment)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Payment> {
        return this.paymentsServise.remove(id)
    }
    
}