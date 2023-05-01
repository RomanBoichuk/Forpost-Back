import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Query, Request } from '@nestjs/common/decorators'
import { ClientsService } from './clients.service'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { Client } from './schemas/client.schema'

@Controller('clients')
export class ClientsCotroller{

    constructor(private readonly clientsService: ClientsService) {
    }
    
    @Get()
    getAll(): Promise<Client[]> {
        return this.clientsService.getAll()
    }

    @Get('search')
    searchOneClientByIPN(@Query('ipn') ipn:string): Promise<Client> {
        return this.clientsService.searchOneClientByIPN(ipn)
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Client> {
        return this.clientsService.getById(id)
    }

    @Post()
    createClient(@Body() createClient: CreateClientDto): Promise<Client> {
        return this.clientsService.create(createClient)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Client> {
        return this.clientsService.remove(id)
    }
    
    @Put(':id')
    update(@Body() updateClient: UpdateClientDto, @Param('id') id: string):Promise<Client> {
        return this.clientsService.update(id, updateClient)
    }
}