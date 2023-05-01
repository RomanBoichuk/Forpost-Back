import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreditcontractsServise } from "./creditcontracts.service";
import { CreateCreditcontractDto } from "./dto/create-creditcontract.dto";
import { Creditcontract } from "./schemas/creditcontract.schema";

@Controller('creditcontracts')
export class CreditcontractsController {
    constructor(private readonly CreditcontractsServise: CreditcontractsServise) {
    }

    @Get()
    getAll(): Promise<Creditcontract[]> {
        return this.CreditcontractsServise.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Creditcontract> {
        return this.CreditcontractsServise.getById(id)
    }

    @Post()
    createCreditcontract(@Body() createCreditcontract: CreateCreditcontractDto): Promise<Creditcontract> {
        return this.CreditcontractsServise.create(createCreditcontract)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Creditcontract> {
        return this.CreditcontractsServise.remove(id)
    }
}