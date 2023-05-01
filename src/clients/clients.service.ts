import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { Client, ClientDocument } from "./schemas/client.schema";

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) { } 
    
    async getAll(): Promise<Client[]> {
        return this.clientModel.find().exec()
    }

    async getById(id: string): Promise<Client> {
        return this.clientModel.findById(id).populate('credit_contracts')
    }

    async searchOneClientByIPN(ipn: string): Promise<Client> {
        return this.clientModel.findOne({client_IPN:ipn})
    }

    async create(clientDto: CreateClientDto): Promise<Client> {
        const newClient = new this.clientModel(clientDto)
        return newClient.save()
    }

    async remove(id: string): Promise<Client> {
        return this.clientModel.findByIdAndRemove(id)
    }

    async update(id: string, clientDto: UpdateClientDto): Promise<Client> {
        return this.clientModel.findByIdAndUpdate(id, clientDto, {new: true})
    }
}